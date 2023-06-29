import styled from "styled-components";

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 82vh;
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

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 200px;
`;

export const MessageContainer = styled.div`
  text-align: center;

  h6 {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2;
    text-align: center;
  }
`;
