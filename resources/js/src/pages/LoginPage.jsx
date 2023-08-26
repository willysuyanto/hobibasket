import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  message,
  Space,
  App,
} from "antd";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/slice/authSlice";
import { logo } from "../../../assets/images/image";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { message } = App.useApp();

  const [login, { data, error, isLoading, isSuccess, isError }] =
    useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      message.success(data?.message);
      dispatch(setAuth(data));
    }

    if (isError) {
      message.error(error?.message);
    }
  }, [isSuccess, isError, error, data]);

  if (authState?.token) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Row justify="center" align="stretch" className="login-container">
      <Col sm={24} lg={12} className="login-image">
        <img src={logo} height={86} />
      </Col>
      <Col xs={24} lg={12} className="login-form">
        <Typography.Title level={3}>LOGIN</Typography.Title>
        <Form
          onFinish={(data) => {
            login(data);
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Username cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password cannot be empty!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" loading={isLoading} htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
        <Space direction="vertical" size={"large"}>
          <Typography.Link
            className="link-button"
            onClick={() => {
              navigate("/register");
            }}
          >
            Forgot your password?
          </Typography.Link>
          <Space direction="vertical" size={0}>
            <Typography.Title level={5}>
              Don't have account yet?
            </Typography.Title>
            <Typography.Text>
              Create your account now to play in any basketball community around
              the city! {"\n"}
              <Typography.Link
                className="link-button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Signup Here!
              </Typography.Link>
            </Typography.Text>
          </Space>
        </Space>
      </Col>
    </Row>
  );
}
