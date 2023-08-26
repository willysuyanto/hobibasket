import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Skeleton,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useState } from "react";
import { BiEdit, BiSearch, BiTrash } from "react-icons/bi";
import { useGetUsersQuery } from "../../../services/userApi";

export default function UsersPage() {
  const { data: userData, isFetching: isFetchingUser } = useGetUsersQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [form] = Form.useForm();

  const openCreateModal = () => {
    setMode("Create Data");
    setModalOpen(true);
  };

  const openEditModal = (editData) => {
    console.log(editData);
    form.setFieldValue('fullName', editData.full_name)
    form.setFieldValue("username", editData.username);
    form.setFieldValue("email", editData.email);
    form.setFieldValue("phoneNumber", editData.phone_number);

    setMode("Edit Data");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    form.resetFields();
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "id",
      sorter: (a, b) => a.full_name > b.full_name,
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Roles",
      dataIndex: ["roles", "name"],
    },
    {
      title: "Action",
      render: (_, data) => (
        <Space>
          <Button type="primary" onClick={() => openEditModal(data)}>
            <BiEdit size={24} />
          </Button>
          <Button type="primary" danger>
            <BiTrash size={24} />
          </Button>
        </Space>
      ),
    },
  ];

  const dataSource = userData?.data?.map((item) => ({ ...item, key: item.id }));

  const onChange = (pagination, filters, sorter, extra) => {};

  return (
    <div>
      <Typography.Title level={4}>User Data</Typography.Title>
      <Button
        style={{ marginBottom: 14 }}
        type="primary"
        onClick={() => {
          openCreateModal();
        }}
      >
        Create New User
      </Button>
      <Card>
        <Form>
          <Form.Item>
            <Input placeholder="Search Data" suffix={<BiSearch />} />
          </Form.Item>
        </Form>
        {isFetchingUser ? (
          <Skeleton active />
        ) : (
          <Table
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}
            pagination
          />
        )}
      </Card>
      {/* Create Modal */}
      <Modal
        open={modalOpen}
        footer={null}
        title={mode}
        onCancel={() => {
          closeModal();
        }}
      >
        <Form
          form={form}
          onFinish={(formData) => {
            if (mode === "Create Data") {
            } else {
            }
          }}
        >
          <Form.Item name="fullName">
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item name="phoneNumber">
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Row justify="end">
          <Form.Item>
            <Button type="primary" htmlType="submit">SAVE</Button>
          </Form.Item>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
