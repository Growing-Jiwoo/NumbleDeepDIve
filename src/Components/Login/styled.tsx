import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  50% {
    background-color: gray;
    color: white;
  }
`;

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
  padding: 1rem 2rem;
  background-color: gray;
  color: white;
  border: none;
  cursor: pointer;
  margin: 3% 0px 0px 0px;

  &:hover {
    animation: ${blinkAnimation} 0.5s linear infinite;
  }
`;

export const LogoImage = styled.img`
  width: 424px;
  position: flex;
  margin: 0px 0px 40px 0px;
`;
