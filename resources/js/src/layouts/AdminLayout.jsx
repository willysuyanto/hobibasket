import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import React from "react";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as Bi from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { logo } from "../../../assets/images/image";
import { getInitials } from "../utils/helpers";

export default function AdminLayout() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(authState)

  const items = [
    {
      label: <Link to="/account">Account</Link>,
      key: "0",
    },
    {
      label: (
        <Typography
          onClick={() => {
            dispatch(logout());
          }}
        >
          Sign Out
        </Typography>
      ),
      key: "1",
    },
  ];

  const menuItems = [
    {
      label: "Users",
      key: "users",
      icon: <Bi.BiUserCircle size={18} />,
    },
    {
      label: "Courts",
      key: "courts",
      icon: <Bi.BiBasketball size={18} />,
    },
    {
      label: "Community",
      key: "community",
      icon: <Bi.BiHomeCircle size={18} />,
    },
  ];

  const menuClick = (e) => {
    navigate(e?.key);
  };

  if (!authState.token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout className="admin">
      <Layout.Header className="admin-header">
        <img alt="logo-image" src={logo} height={40} />
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="header-dropdown"
        >
          <Button type="text" onClick={(e) => e.preventDefault()}>
            <Space size="small" direction="horizontal">
              <Avatar size="default">{getInitials(authState?.user?.full_name)}</Avatar>
              <span>{`Hi, ${authState?.user?.full_name}`}</span>
            </Space>
          </Button>
        </Dropdown>
      </Layout.Header>
      <Layout>
        <Layout.Sider className="admin-sider" theme="light" width={250}>
          <Menu
            mode="inline"
            items={menuItems}
            onClick={menuClick}
            selectedKeys={location.pathname.replace("/admin/", "")}
          />
        </Layout.Sider>
        <Layout.Content className="admin-content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
