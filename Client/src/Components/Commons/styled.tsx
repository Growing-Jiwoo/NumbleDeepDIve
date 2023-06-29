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
`;

export const HeaderImage = styled.img<{ hideOnMain?: boolean }>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  visibility: ${(props) => (props.hideOnMain ? "hidden" : "visible")};
`;

export const HeaderText = styled.span`
  font-size: 40px;
  font-weight: bolder;
  background-clip: text;
`;

export const Nav = styled.nav`
  background-color: white;
  height: 60px;
  width: 100%;
  max-width: 686px;
  padding: 16px 24px 0px 0px;
  position: fixed;
  bottom: 0px;
  z-index: 3;
  border-top: 1px solid rgb(230, 230, 230);

  ul {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }

  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const ProfileImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &.userProfile {
    width: 30vw;
    height: 30vw;
  }

  &.sendUserProfile {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &.sendUserProfile img {
    width: 40px;
    height: 40px;
  }

  img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
  }
`;
