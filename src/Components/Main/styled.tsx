import styled from "styled-components";

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
  background-color: rgb(189, 189, 189);
  width: 30vw;
  height: 30vw;
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
