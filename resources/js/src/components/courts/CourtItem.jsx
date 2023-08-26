import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";

export default function CourtItem({ courtName, courtAddress, images }) {
  return (
    <div className="content-item">
      <Space size="large">
        <img src={images} className="content-item-images"/>
        <Space direction="vertical" size={0}>
          <Typography.Title level={5}>{courtName}</Typography.Title>
          <Typography.Text>{courtAddress}</Typography.Text>
        </Space>
      </Space>
    </div>
  );
}
