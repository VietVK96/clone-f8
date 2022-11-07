import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { Button, Form, Input, message } from "antd";

export default function Signup() {
  
  const navigate = useNavigate();

  const Check = (arr, val) => {
    let isHave = false;
    arr.forEach((item) => {
      item.username === val ? (isHave = true) : (isHave = false);
    });
    return isHave;
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const listIniUser = JSON.parse(localStorage.getItem("listUser") || "[]"); //Nếu undefined thì sẽ parse mảng rỗng

    if (Check(listIniUser, values.username)) {
      message.error("Tai khoan user da ton tai");
    } else {
      localStorage.setItem(
        "listUser",
        JSON.stringify([...listIniUser, values])
      );

      form.resetFields();
      message.success("Ban da dang ki thanh cong");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div style={{ margin: "0 auto", width: 720 }}>
      <h2 style={{ textAlign: "center" }}>Dang ki tai khoan F8</h2>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              message: "Please input the minimum letters!",
              min: 1,
            },
            {
              message: "Please input less maximum letters!",

              max: 20,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your number!",
            },

            {
              pattern: /[0-9]{10,11}/,
              message: "Please input your number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Signup
          </Button>

        </Form.Item>
      </Form>
      <Button >
      <Link to="/">Back to Home</Link>
     
          </Button>

    </div>
  );
}
