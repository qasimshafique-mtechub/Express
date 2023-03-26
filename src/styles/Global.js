import styled from "styled-components";

export const AuthFormMain = styled.div`
  width: 100%;
  height: 100vh;
  background: #100c7a;
`;

export const Oval = styled.div`
  width: 100%;
  height: 168px;
  background: #ffffff;
  border-radius: 100% 100% 0% 0%;
  position: fixed;
  top: 10;
  bottom: 0%;
`;

export const AuthForm = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  margin: 50px auto;
  padding: 49px;
`;

export const SignupForm = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  margin: 50px auto;
  height: 562px;
  padding: 57px;
`;

export const FormImage = styled.img`
  position: absolute;
  left: 117px;
  width: 220px;
  top: 72px;
`;

export const FormHeading = styled.h4`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 28px;
  color: #3369ff;
`;

export const OrLine = styled.p`
  display: flex;
  flex-direction: row;

  &:before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #000;
    margin: auto;
  }
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SocialButton = styled.button`
  background-color: white;
  border: yellow;
  border-radius: -2px;
  color: black;
  cursor: pointer;
  padding: 8px;
  box-shadow: 0 0 25px rgb(0 0 0 / 15%);
`;

export const FormBackgroundImage = styled.img`
  width: 100%;
`;
