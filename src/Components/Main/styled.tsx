import styled from "styled-components";

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 0px;
  overflow: hidden;
  width: 30vw;
  height: 30vw;

  img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

export const UserName = styled.h5`
  margin: 20px 0px 0px;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  width: 40%;

  &#likeBtn {
    border: 1px solid orange;
    color: orange;
  }
  &#hateBtn {
    border: 1px solid cornflowerblue;
    color: cornflowerblue;
  }
`;
