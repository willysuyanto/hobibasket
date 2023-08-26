import { Button, Result, Typography } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminLayout from "../layouts/AdminLayout";
import UsersPage from "../pages/admin/users/UsersPage";
import HomePage from "../pages/HomePage";
import CourtPage from "../pages/courts/CourtPage";
import CommunityPage from "../pages/community/CommunityPage";
import AdminCourtPage from "../pages/admin/courts/CourtsPage";
import AdminCommunityPage from "../pages/admin/community/CommunityPage";
import DashboardPage from "../pages/admin/dashboard/DashboardPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="court" element={<CourtPage />} />
          <Route path="community" element={<CommunityPage />} />
        </Route>
        {/* Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="courts" element={<AdminCourtPage />} />
          <Route path="community" element={<AdminCommunityPage />} />
        </Route>
        {/* Other Routes */}
        <Route
          path="*"
          element={
            <div>
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
