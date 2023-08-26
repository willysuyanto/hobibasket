import { Col, Grid, Row, Space, Typography } from "antd";
import React from "react";
import logo from "../../../../assets/images/logo-hobi-basket.png";

export default function Footer() {
  const {xs} = Grid.useBreakpoint()
  return (
    <div className="footer">
      <div className="footer-content">
        <Row className="footer-wrapper" align="middle">
          <Col xs={24} sm={12}>
            <Space size={24} align="center">
              <img alt="logo-image" height={60} src={logo} />
              <Space direction="vertical" size={0}>
                <Typography.Text>
                  Start your way by playing in any basketball community
                </Typography.Text>
                <Typography.Text>
                  Best App for Basketball Game in Bandung
                </Typography.Text>
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={12} className={xs ? 'link-container-mobile' : 'link-container'}>
            <Space direction="vertical" align={xs ? 'start' : 'end'} size={4}>
              <Typography.Link>CONTACT SUPPORT</Typography.Link>
              <Typography.Link>TERMS AND CONDITION</Typography.Link>
              <Typography.Link>PRIVACY POLICY</Typography.Link>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="copyright"><Typography.Text>© 2023 Hobi Basket. All Right Reserved</Typography.Text></div>
    </div>
  );
}
