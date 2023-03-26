import React, { useState } from "react";
import {
  ForgetFormImage,
  InnerForgetForm,
  InnerFOrgetForm,
  InnerPasswordForm,
  OuterForgetForm,
  OvalForgetForm,
  OvalFOrgetForm,
} from "../styles/ForgetPassword";
import {
  AuthForm,
  AuthFormMain,
  ButtonWrapp,
  FormBackgroundImage,
  FormHeading,
  FormImage,
  OrLine,
  Oval,
  SocialButton,
} from "../styles/Global";
import { Button, Forget, FormSubmit, LoginForm } from "../styles/Login";
import { Alert, Checkbox, Form, Input } from "antd";
import { useEmailSend } from "../Service/UseForgetPassword";
import Swal from "sweetalert2";

function ForgetPassword() {
  // states
  const [errorshow, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  // Api call

  const { mutateAsync: emailsend } = useEmailSend();
  const onFinish = (values) => {
    emailsend(values)
      .then((res) => {
        // setError({
        //   status: true,
        //   msg: res.data.message,
        //   type: "success",
        // });
        Swal.fire({
          title: "Success",
          text: res.data.message,
          // showDenyButton: true,
          showCloseButton: true,
          //   confirmButtonColor: "#0000",
          //   DenyButtonColor: "#fff",
          // confirmButtonText: "Yes",
        });

        console.log(res, "response");
      })
      .catch((err) => {
        // setError({
        //   status: true,
        //   msg: err.response.data.message,
        //   type: "error",
        // });
        Swal.fire({
          title: "Error",
          text: err.response.data.message,
          // showDenyButton: true,
          showCloseButton: true,
          //   confirmButtonColor: "#0000",
          //   DenyButtonColor: "#fff",
          // confirmButtonText: "Yes",
        });

        console.log(err, "response");
      });
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
    <>
      <FormBackgroundImage src="/image/formimage.png" alt="formimahe" />
      <OuterForgetForm>
        <InnerPasswordForm>
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // style={{ marginTop: "113px" }}
          >
            <ForgetFormImage src="/images/logo.png" />
            <br />
            <br />
            <FormHeading>Forget Password</FormHeading>
            <br />
            <br />

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
              <Input
                type="email"
                placeholder="Enter Email"
                style={{ borderRadius: "20px", height: "50px" }}
              />
            </Form.Item>
            <br />
            {/* <Forget></Forget> */}

            {/* <Link to="/aaa">sss</Link> */}
            <FormSubmit>
              <Button type="submit">Forget Password</Button>
            </FormSubmit>
            <br />
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

            {/* <Button  style={{ width: "70%" , color: "orange" }}  htmlType="submit">
                  Submit
                </Button> */}
          </Form>
        </InnerPasswordForm>
      </OuterForgetForm>
    </>
  );
}

export default ForgetPassword;
