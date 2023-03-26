import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

export const ResumeHeader = styled.div`
  height: 200px;
  background-color: #3870b1;
`;
export const ResumeImage = styled.img`
// position: absolute;
// top: 380px;
// right: 120px;
border-radius: 100%;
width: 200px;
`;
export const ResumeTitle = styled.h3`
  // position: absolute;
  // top: 482px;
  // left: 598px;
  font-size: 64px;
`;
export const ResumeBox = styled.div`
  margin-top: 75px;
`;
export const ResumeNmber = styled.p`
  font-size: 13px;
  margin-top: 50px;
  margin-left: 25px;
`;
export const ResumeContact = styled.p`
  font-size: 13px;
  display: flex;
`;
export const VerticalLine = styled.div`
  border-right: 1px solid grey;
  height: 130px;
  margin-right: -10px;
`;
export const VerticalLineSkill = styled.div`
  border-right: 1px solid grey;
  height: 167px;
  margin-right: -10px;
`;
export const VerticalLineEducation = styled.div`
  border-right: 1px solid grey;
  height: 167px;
  margin-right: -10px;
`;
export const ResumeHeading = styled.h3`
  color: blue;
`;
export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 280px;
  left: 261px;
`;
export const DetailForm = styled.div`
  position: absolute;
  top: 360px;
  left: 200px;
`;
export const ResumeButtos = styled.div`
  position: absolute;
  top: 596px;
  left: 242px;
`;
