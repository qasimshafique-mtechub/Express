import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

export const useAdminSignup = () =>
    useMutation(
        (data) =>
            axios.post(`${process.env.REACT_APP_API_PATH}/register`, {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.confirmPassword,
                user_type:'admin'
            }),
        {
            onSuccess: (data) => {
                console.log('Login Valid');
            },
            onError: () => {
                console.log('inValid User');
            }
        }
    );

export const useUserSignup = () =>
    useMutation(
        (data) =>
        axios.post(`${process.env.REACT_APP_API_PATH}/register`, {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.confirmPassword,
            user_type:'user'
        }),
        {
            onSuccess: (data) => {
                console.log(  'Login Valid');
            },
            onError: () => {
                console.log('inValid User');
            }
        }
    );
