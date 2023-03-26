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
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "../Service/UseForgetPassword";

function ResetNewPassword() {
  const [confirmDirty, setConfirmDirty] = useState(false);

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
  const navigate = useNavigate();
  const { otp } = useParams();
  const { mutateAsync: resetpassword } = useResetPassword();

  const onFinish = async (values) => {
    await resetpassword({ values, otp })
      .then((res) => {
        setError({
          status: true,
          msg: res.data.message,
          type: "success",
        });
        navigate("/login");
      })
      .catch((err) => {
        setError({
          status: true,
          msg: err.response.data.message,
          type: "error",
        });
        console.log(err, "error");
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validateOTP = (rule, value, callback) => {
    if (!value || value.length !== 4) {
      callback("please enter  a 4-digit OTP");
    } else if (!/^\d+$/.test(value)) {
      callback("OTP should only contain digits");
    } else {
      callback();
    }
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
            <FormHeading>Reset Password</FormHeading>
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

            <br />
            {/* <Forget></Forget> */}

            {/* <Link to="/aaa">sss</Link> */}
            <FormSubmit>
              <Button type="submit">Reset</Button>
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

export default ResetNewPassword;
