import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
`;

export const MyInfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const MyinfoEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const MyInfoProfileImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  color: white;
  background-color: lightgrey;
  width: 160px;
  height: 160px;
`;

export const ButtonCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtonDiv = styled.div`
  padding: 8px 80px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
`;

export const NameText = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const EditBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const PopupContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  #closebtn {
    width: 25px;
    height: 25px;
    position: absolute;
    top: -18px;
    right: -18px;
    z-index: 2;
  }
`;

export const MyInfoSaveBtn = styled.button`
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  font-weight: 500;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: rgb(25, 118, 210);
  width: 100%;
`;
