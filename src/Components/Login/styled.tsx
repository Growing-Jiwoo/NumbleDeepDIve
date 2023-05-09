import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  padding-bottom: 70px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 50%;
  padding: 0.7rem;
  font-size: 1rem;
  margin: 1rem 0;
  border: none;
  border-bottom: 2px solid gray;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:focus {
    outline: none;
    border-bottom: 2px solid teal;
    transform: scale(1.1);
    color: teal;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export const Button = styled.button`
  width: 30%;
  border: none;
  cursor: pointer;
  margin: 3% 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  font-weight: 500;
  font-size: 0.875rem;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: rgb(25, 118, 210);

  &.login {
    margin-top: 5%;
  }
`;
