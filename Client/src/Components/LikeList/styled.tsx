import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 120px;
`;

export const LikeTabMenu = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  max-width: 360px;
  min-width: 90px;
  position: relative;
  flex-shrink: 0;
  flex-direction: column;
  min-height: 48px;
  padding: 12px 16px;
  overflow: hidden;
  text-align: center;
  color: black;
  width: 50%;
  transition: color 0.2s, border-bottom 0.2s;
`;

export const SendBtn = styled(BaseButton)<{ active: boolean }>`
  ${(props) =>
    props.active &&
    css`
      color: dodgerblue;
      border-bottom: 2px solid dodgerblue;
    `}
`;

export const ReceiveBtn = styled(BaseButton)<{ active: boolean }>`
  ${(props) =>
    props.active &&
    css`
      color: dodgerblue;
      border-bottom: 2px solid dodgerblue;
    `}
`;
export const LikeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const LikeListDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    margin: 0px 0px 0px 24px;
    font-size: 1rem;
    line-height: 1.5;
    width: 100%;
  }

  button {
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid indianred;
    color: crimson;
  }
`;

// export const LikeUserImg = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   overflow: hidden;

//   img {
//     height: 40px;
//     width: 100%;
//     text-align: center;
//     object-fit: cover;
//   }
// `;
