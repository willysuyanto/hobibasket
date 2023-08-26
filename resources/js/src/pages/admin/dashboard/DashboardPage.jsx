import { Card, Col, Row, Typography } from "antd";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <Typography.Title level={4}>HOBI BASKET DASHBOARD</Typography.Title>
      <Row gutter={[14,14]}>
        <Col sm={6}>
          <Card>
            <Typography.Title level={5}>Players Count</Typography.Title>
            <Typography.Text>127</Typography.Text>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Typography.Title level={5}>Courts Count</Typography.Title>
            <Typography.Text>35</Typography.Text>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Typography.Title level={5}>Community Count</Typography.Title>
            <Typography.Text>20</Typography.Text>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Typography.Title level={5}>Schedule Count</Typography.Title>
            <Typography.Text>230</Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
