import { useMutation, useQuery } from "react-query";
import axios from "axios";
// const info = useQuery('todos', fetchTodoList)

export const useAdminSignup = () =>
useQuery('todo', )
export const async function usefetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  }
 

export const useEmailSend = () =>
  useMutation(
    (data) =>
      axios.post(
        `${process.env.REACT_APP_API_PATH}/send-reset-password-email`,
        {
          email: data.email,
        }
      ),
    {
      onSuccess: (data) => {
        console.log("Login Valid");
      },
      onError: () => {
        console.log("inValid User");
      },
    }
  );

export const useVerifyOtp = () =>
  useMutation(
    (data) =>
      axios.post(`${process.env.REACT_APP_API_PATH}/reset_passwords/verify`, {
        otp: data.otp,
      }),
    {
      onSuccess: (data) => {
        console.log("Login Valid");
      },
      onError: () => {
        console.log("inValid User");
      },
    }
  );

export const useResetPassword = () =>
  useMutation(
    ({ values, otp }) =>
      axios.post(`${process.env.REACT_APP_API_PATH}/reset_password/${otp}`, {
        password: values.password,
        password_confirmation: values.confirmPassword,
      }),
    {
      onSuccess: (values) => {
        console.log("Login Valid");
      },
      onError: (values) => {
        console.log(values, "inValid User");
      },
    }
  );
