import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { eventOptions, validateMessages } from "./helper";

const onFinish = (values) => {
  console.log(values);
};

const RegForm = () => {
  return (
    <div className="reg_form">
      <div>
        <Form
          labelCol={{ span: 12 }}
          initialValues={{ remember: true }}
          name="event-reg"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item
            name="number"
            label="Phone Number"
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber
              controls={false}
              type="number"
              style={{ width: "300px" }}
            />
          </Form.Item>
          <Form.Item name="event" label="Event" rules={[{ required: true }]}>
            <Select options={eventOptions} style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegForm;
