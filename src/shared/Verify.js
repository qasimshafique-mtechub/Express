import React, { useState } from "react";
import {
  ForgetFormImage,
  InnerForgetForm,
  InnerFOrgetForm,
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
import { useVerifyOtp } from "../Service/UseForgetPassword";
import { Link, redirect, useNavigate, Navigate } from "react-router-dom";

function Verify() {
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
  // Api call

  const { mutateAsync: verifyotp } = useVerifyOtp();
  const onFinish = (values) => {
    verifyotp(values)
      .then((res) => {
        setError({
          status: true,
          msg: res.data.message,
          type: "success",
        });
        // <Navigate to="/dashboard" replace={true} />
        navigate(`/new_password/${values.otp}`);
        // <Link></Link>
        console.log(res, "response");
      })
      .catch((err) => {
        setError({
          status: true,
          msg: err.response.data.message,
          type: "error",
        });
        console.log(err, "response");
      });
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
  return (
    <>
      <FormBackgroundImage src="/image/formimage.png" alt="formimahe" />
         <OuterForgetForm>
     
      <InnerForgetForm>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // style={{ marginTop: "113px" }}
        >
          <ForgetFormImage src="/images/logo.png" />
          <FormHeading>Forget Password</FormHeading>
          <Form.Item name="otp" rules={[{ validator: validateOTP }]}>
            <Input maxLength={4} placeholder="Enter OTP" />
          </Form.Item>
          {/* <Forget></Forget> */}

          {/* <Link to="/aaa">sss</Link> */}
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
          <br />
          <FormSubmit>
            <Button type="submit">Forget Password</Button>
          </FormSubmit>

          {/* <Button  style={{ width: "70%" , color: "orange" }}  htmlType="submit">
                  Submit
                </Button> */}
        </Form>
      </InnerForgetForm>
        </OuterForgetForm>

    </>
    // <AuthFormMain>
    //   <OvalForgetForm>

    //   </OvalForgetForm>
    // </AuthFormMain>
  );
}

export default Verify;
