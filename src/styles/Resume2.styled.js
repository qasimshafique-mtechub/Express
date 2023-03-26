import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const ResumeName = styled.h4`
  color: blue;
  margin-right: 48px;
  margin-top: 50px;
  font-size: -webkit-xxx-large;
`;
export const ResumeContact = styled.div`
  height: 150px;
  background: #0001;
  display: flex;
  justify-content: right;
`;

export const Contact = styled.div`
  margin-top: 50px;
`;

export const CareerPath = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailForm = styled.div`
  position: absolute;
  top: 450px;
  left: 180px;
`;

export const DetailEducationForm = styled.div`
  position: absolute;
  top: 450px;
  left: 182px;
`;
