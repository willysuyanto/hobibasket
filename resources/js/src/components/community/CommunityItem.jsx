import { Col, Image, Row, Space, Typography } from "antd";
import React from "react";

export default function CommunityItem({ name, description, images }) {
  return (
    <div className="content-item">
      <Space size="large">
        <img src={images} className="content-item-images"/>
        <Space direction="vertical" size={0}>
          <Typography.Title level={5}>{name}</Typography.Title>
          <Typography.Text>{description}</Typography.Text>
        </Space>
      </Space>
    </div>
  );
}
