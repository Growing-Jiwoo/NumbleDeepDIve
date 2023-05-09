import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: white;
  z-index: 10;
  top: 0px;
  height: 60px;
  max-width: 720px;
  padding-right: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderText = styled.span`
  font-size: 40px;
  font-weight: bolder;
  background-image: linear-gradient(to right, red, rgb(50, 71, 229));
  background-clip: text;
  color: transparent;
`;
