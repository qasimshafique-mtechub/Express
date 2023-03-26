import styled from "@emotion/styled";

export const PersuasiveHeader = styled.div`
  height: 200px;
  background: brown;
`;
export const PersuasiveCareer = styled.li`
  position: relative;
  padding-left: 20px;
  margin-top: 44px;

  &::before {
    content: "";
    display: block;
    width: 10px; /* the size of the circle */
    height: 10px;
    border-radius: 50%; /* make it a circle */
    background-color: black; /* or any color you want */
    position: absolute;
    left: -15px; /* position it to the left of the li tag */
    // top: 50%; /* vertically center it */
    transform: translateY(-50%); /* adjust the vertical position */
  }
  ,
  &::after {
    content: "";
    display: block;
    width: 1px; /* the width of the line */
    height: 100%; /* make it as tall as the li tag */
    background-color: black; /* or any color you want */
    position: absolute;
    left: -10px; /* position it to the left of the circle */
    top: 0;
  }
`;

export const PersuasiveUlTag = styled.ul`
  list-style: none;
`;

export const PersuasiveChildData = styled.div`
  margin-left: 50px;
  margin-top: 60px;
`;

export const PersuasiveTitle = styled.div`
  font-size: 37px;
`;
