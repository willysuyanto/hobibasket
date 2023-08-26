<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request) {

        $request->validate(
            [
                'username' => 'required',
            ],
            [
                'username.required' => 'Username or password not valid',
            ]
        );

        $input = $request->all();
        $user = User::with(['roles'])->where('username', $input['username'])->first();

        if (!$user || !Hash::check($input['password'], $user->password)) {
            return response([
                'code' => 401,
                'success' => false,
                'message' => 'Username or password not valid',
            ], 401);
        };

        $token = $user->createToken('myauthtoken')->plainTextToken;

        $res = [
            'code' => 201,
            'success' => true,
            'message' => 'Login Success, Welcome Back!',
            'user' => $user,
            'token' => $token,
        ];

        return response($res);
    }

    public function register(Request $request) {
        $request->validate([
            'username' => 'unique:users,username',
            'phoneNumber' => 'unique:users,phone_number',
            'email' => 'unique:users,email',
            'password' => 'min:8',
        ]);
        
        $user = User::create([
            'full_name' => $request->fullName,
            'email' => $request->email,
            'phone_number' => $request->phoneNumber,
            'password' => Hash::make($request->password),
            'username' => $request->username,
            'roles_id' => 3,
        ]);

        $res = [
            'code' => 201,
            'success' => true,
            'message' => 'User registered successfully',
        ];

        return response($res);
    }
    
}
