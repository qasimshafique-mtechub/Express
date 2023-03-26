import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Columnsa = styled.button`
  border-right: none;
  border-top: none;
  border-bottom: none;
  &:before {
    content: "";
    border-left: 1px solid black;
    height: 100%;
  }
`;

export const CorporateProfile = styled.h4`
  font-size: 41px;
  font-style: oblique;
`;

export const ContactFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contactlogo = styled.div`
  background: grey;
  width: 20px;
  color: white;
  text-align: center;
`;

export const DetailCorporate = styled.div`
  position: absolute;
  top: 369px;
  left: 180px;
`;

export const DetailCorporateEducation = styled.div`
  position: absolute;
  top: 430px;
  left: 180px;
`;
