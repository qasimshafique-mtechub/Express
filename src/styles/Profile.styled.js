import styled from "styled-components";
export const UploadContainer = styled.div`
  width: 100px;
  position: relative;
  margin: auto;
`;

export const UploadImage = styled.img`
  border-radius: 50%;
  width: 80px;
  border: 6px solid #eaeaea;
`;

export const RoundButton = styled.div`
  position: absolute;
  bottom: 1px;
  right: 30px;
  height: 32px;
  line-height: 33px;
`;

export const UploadInput = styled.input`
  position: absolute;
  transform: scale(2);
  opacity: 0;
`;

export const ProfileHeading = styled.label`
  color: blue;
  font-size: 22px;
  font-weight: lighter;
`;

export const ProfileForm = styled.div`
  position: fixed;
  bottom: -8%;
  left: 26%;
`;

export const EducationHeading = styled.div`
  position: absolute;
  top: 400px;
`;

export const ExperienceHeading = styled.div`
  position: absolute;
  top: 870px;
`;
