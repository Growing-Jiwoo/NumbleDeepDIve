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
  label {
    color: darkgray;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  #errorMsg {
    font-size: 12px;
    color: crimson;
  }
`;

export const MyInfoSaveBtn = styled.button<{ isValid: boolean }>`
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  font-weight: 500;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.isValid ? "dodgerblue" : "crimson")};
  color: ${(props) => (props.isValid ? "dodgerblue" : "crimson")};
  background-color: ${(props) => (props.isValid ? "transparent" : "lightgray")};

  width: 100%;
`;

export const NickNameInput = styled.input`
  border: 1px solid gray;
  width: 100%;
  padding: 15px 13px;
  margin-bottom: 10px;
`;
