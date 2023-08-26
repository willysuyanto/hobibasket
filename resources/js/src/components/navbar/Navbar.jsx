import React, { useMemo, useState } from "react";
import { Button, Col, Menu, Row, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo-hobi-basket.png";
import * as Gr from "react-icons/gr";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  // handle page scrolling to hide navbar when scrolled down
  const { scrollDirection } = useScrollDirection();
  const isScrollDown = useMemo(
    () => scrollDirection === "down",
    [scrollDirection]
  );

  return (
    <header className={!isScrollDown ? "navbar" : "navbar hidden"}>
      <Row
        gutter={12}
        align="middle"
        justify="space-between"
        className="navbar-wrapper"
      >
        <Col xs={2} lg={0}>
          <Button type="text" size="large">
            <MenuOutlined />
          </Button>
        </Col>
        <Col className="navbar-brand">
          <img alt="logo-image" height={40} src={logo} />
        </Col>
        <Col xs={0} lg={12} className="navbar-nav">
          <Space align="middle">
            <Button
              block
              type="link"
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </Button>
            <Button
              block
              type="link"
              onClick={() => {
                navigate("/community");
              }}
            >
              COMMUNITY
            </Button>
            <Button
              block
              type="link"
              onClick={() => {
                navigate("/court");
              }}
            >
              COURT
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate("login");
              }}
            >
              LOGIN
            </Button>
            <Button
              type="primary"
              onClick={() => {
                navigate("register");
              }}
            >
              SIGN UP
            </Button>
          </Space>
        </Col>
        <Col xs={2} lg={0} />
      </Row>
    </header>
  );
};

export default Navbar;
