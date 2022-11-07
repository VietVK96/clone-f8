import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import styled from "styled-components";

export const Login = () => {
  const navigate = useNavigate();
  const dataUser = JSON.parse(localStorage.getItem("listUser") || "[]");
  console.log("dataUser", dataUser);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const User = dataUser.find((user) => {
      return (
        user.username === values.username && user.password === values.password
      );
    });
    console.log("user", User);

    if (User) {
      localStorage.setItem("userLogin", JSON.stringify(User));
      message.success("Ban da dang nhap thanh cong");
      navigate("/");

    } else {
      message.error("Sai username hoac password");
    }
  };
  return (
    <div style={{ margin: "0 auto", width: 720 }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      <Button>
        <Link to="/signup">Sign UP</Link>
      </Button>
    </div>
  );
};
