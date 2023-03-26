import React, { useState } from "react";
import { AdminForm } from "../../styles/Signup";
import { Alert, Checkbox, Form, Input } from "antd";
import {
  AuthForm,
  AuthFormMain,
  ButtonWrapp,
  FormBackgroundImage,
  FormHeading,
  FormImage,
  OrLine,
  Oval,
  SignupForm,
  SocialButton,
} from "../../styles/Global";
import { Button, Forget, FormSubmit, LoginForm } from "../../styles/Login";
import { Link, useNavigate } from "react-router-dom";
import { useAdminSignup, useUserSignup } from "../../Service/UseSignup";
import Swal from "sweetalert2";

function AdminSignup() {
  // states
  const [errorshow, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [form] = Form.useForm();
  const [confirmDirty, setConfirmDirty] = useState(false);

  // Api call

  const { mutateAsync: signup } = useAdminSignup();

  const handleFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };

  const handlePasswordBlur = (e) => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value);
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }

      return Promise.reject(
        new Error("The two passwords that you entered do not match.")
      );
    },
  });

  const validateToNextPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (
        !value ||
        confirmDirty ||
        getFieldValue("confirmPassword") === value
      ) {
        return Promise.resolve();
      }

      return Promise.reject(new Error("Please confirm your password."));
    },
  });
  const navigate = useNavigate();

  const onFinish = (values) => {
    signup(values)
      .then((res) => {
        // setError({
        //   status: true,
        //   msg: res.data.status,
        //   type: "success",
        // });
        navigate("/login");
        // Swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: res.data.status,
        //   showConfirmButton: false,
        //   timer: 1500
        // })
        console.log(res, "response`");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err, "error");
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateEmail = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return Promise.resolve();
      }

      return Promise.reject(new Error("please enter  a valid email address."));
    },
  });

  return (
    <div>
      <FormBackgroundImage src="/image/formimage.png" alt="formimahe" />
      <LoginForm>
        <SignupForm>
          <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // style={{ marginTop: "113px" }}
          >
            <FormImage src="/images/logo.png" />
            <FormHeading>Sign up</FormHeading>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "please enter your name!" }]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "please enter your email address.",
                },
                validateEmail,
              ]}
            >
              <Input type="email" placeholder="Enter Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "please enter your password.",
                },
                {
                  min: 8,
                  message: "Password must be at least 8 characters long.",
                },
                validateToNextPassword,
              ]}
            >
              <Input.Password
                onBlur={handlePasswordBlur}
                placeholder="Enter Password "
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password.",
                },
                validateConfirmPassword,
              ]}
            >
              <Input.Password placeholder="Enter Confirm Password" />
            </Form.Item>
            <OrLine>OR</OrLine>
            <ButtonWrapp>
              <SocialButton style={{ marginRight: "21px" }}>
                <i
                  class="fa fa-google"
                  style={{ color: "red", marginRight: "10px" }}
                ></i>
                log in with Google
              </SocialButton>
              <SocialButton>
                <i
                  class="fa fa-linkedin"
                  style={{ color: "blue", marginRight: "10px" }}
                ></i>
                log in with linkdin
              </SocialButton>
            </ButtonWrapp>
            <br />
            <br />
            {/* <Forget></Forget> */}

            {/* <Link to="/aaa">sss</Link> */}
            <FormSubmit>
              <Button type="submit">Sign Up</Button>
            </FormSubmit>
            {errorshow.status ? (
              <Alert
                message={errorshow.msg}
                type={errorshow.type}
                closable
                afterClose={handleClose}
                showIcon
              />
            ) : (
              // <Alert message="Success Tips" type="success" showIcon />

              ""
            )}

            <p class="text-center">
              ALready have an account?
              <Link to="/login">Sign in </Link>
            </p>

            {/* <Button  style={{ width: "70%" , color: "orange" }}  htmlType="submit">
                  Submit
                </Button> */}
          </Form>
        </SignupForm>
      </LoginForm>
    </div>
  );
}

export default AdminSignup;
