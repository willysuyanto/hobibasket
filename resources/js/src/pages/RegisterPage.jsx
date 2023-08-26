import { Card, Row, Col, Typography, Form, Input, Button, App } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../../assets/images/image";
import { normalizeNumber } from "../utils/formatter";
import { useRegisterMutation } from "../services/authApi";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { message } = App.useApp();

  const [register, { isLoading, data, isSuccess, isError, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      message.success(data?.message)
      navigate('/login')
    }

    if(isError) {
      message.error(error?.message)
    }
  }, [isSuccess, isError, data, error]);

  return (
    <Row justify="center" align="stretch" className="login-container">
      <Col sm={24} lg={12} className="login-image">
        <img src={logo} height={86} />
      </Col>
      <Col xs={24} lg={12} className="register-form">
        <Typography.Title level={3}>SIGN UP</Typography.Title>
        <Form
          onFinish={(value) => {
            register(value);
          }}
        >
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Full Name cannot be empty!" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email cannot be empty!" },
              { type: "email", message: "Not a valid email" },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            normalize={normalizeNumber}
            rules={[
              {
                required: true,
                message: "Phone Number cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Username cannot be empty!" }]}
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
            <Button block type="primary" htmlType="submit">
              REGISTER
            </Button>
          </Form.Item>
        </Form>
        <Typography.Text>
          Already have account?{" "}
          <Typography.Link
            className="link-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In Here!
          </Typography.Link>
        </Typography.Text>
      </Col>
    </Row>
  );
}
