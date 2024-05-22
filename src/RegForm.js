import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { eventOptions, validateMessages } from "./helper";
import { registerForm } from "./services";

const RegForm = () => {
  const [registered, setRegistered] = useState({});

  const onFinish = async (values) => {
    const res = await registerForm(values);
    if (res?.success) {
      setRegistered(res);
    }
  };

  return (
    <div className="reg_form">
      {registered.data ? (
        <div>
          <h1>Event Registration Details</h1>
          <div>
            <strong>Registration Id:</strong> {registered.data.id}
          </div>
          <div>
            <strong>Name:</strong> {registered.data.name}
          </div>
          <div>
            <strong>Email:</strong> {registered.data.email}
          </div>
          <div>
            <strong>Phone Number:</strong> {registered.data.phone_number}
          </div>
          <div>
            <strong>Event:</strong> {registered.data.event}
          </div>
          <div className="response-message">
            You have been registered successfully!
          </div>
        </div>
      ) : (
        <div>
          <Form
            labelCol={{ span: 12 }}
            initialValues={{ remember: true }}
            name="event-reg"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true }]}
            >
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
              name="phone_number"
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
      )}
    </div>
  );
};

export default RegForm;
