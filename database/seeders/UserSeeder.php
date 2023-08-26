<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'full_name' => 'John Doe',
            'username' => 'super_admin',
            'phone_number' => '082123456789',
            'email' => 'super_admin@gmail.com',
            'roles_id'=> 1,
            'password' => bcrypt('password123'),
        ]);

        User::create([
            'full_name' => 'John Wick',
            'username' => 'super_admin2',
            'phone_number' => '082123456777',
            'email' => 'super_admin2@gmail.com',
            'roles_id'=> 1,
            'password' => bcrypt('password123'),
        ]);
    }
}
