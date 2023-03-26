import React, { useState } from "react";
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
  SocialButton,
} from "../../styles/Global";
import { Button, Forget, FormSubmit, LoginForm } from "../../styles/Login";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUser } from "../../Service/UserLogin";
import { storeToken } from "../../services/LocalStorage";
import Swal from "sweetalert2";
function Login() {
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

  const { mutateAsync: login } = useLoginUser();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    login(values)
      .then((res) => {
        storeToken(res.data.access_token);
        // sessionStorage.setItem('Token', res.data.access_token)
        // setError({
        //   status: true,
        //   msg: res.data.message,
        //   type: "success",
        // });
        navigate("/");
        console.log(res, "response");
      })
      .catch((err) => {
        Swal.fire({
          title: "Alert",
          text: err.response.data.result,
          // showDenyButton: true,
          showCloseButton: true,
          //   confirmButtonColor: "#0000",
          //   DenyButtonColor: "#fff",
          // confirmButtonText: "Yes",
        });
        // setError({
        //   status: true,
        //   msg: err.response.data.result,
        //   type: "error",
        // });
        // console.log(err.response.data.result, "error");
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
      <LoginForm>
        <AuthForm>
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // style={{ marginTop: "113px" }}
          >
            <FormImage src="/images/logo.png" />
            <FormHeading>Sign In</FormHeading>
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
                style={{ borderRadius: "20px", height: "50px", width: "350px" }}
              />
            </Form.Item>
            <br />
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "please enter your password!" },
              ]}
            >
              <Input.Password
                style={{ borderRadius: "20px", height: "50px", width: "350px" }}
                placeholder="Enter Password"
              />
            </Form.Item>
            <Forget>
              <Link to="/forgetpassword">Forget Password</Link>
            </Forget>
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
              <Button type="submit">Sign in</Button>
            </FormSubmit>
            <p class="text-center">
              Don't have an account?
              <Link to="/user/signup">Sign up</Link>
            </p>
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
        </AuthForm>
      </LoginForm>
    </>
  );
}

export default Login;
