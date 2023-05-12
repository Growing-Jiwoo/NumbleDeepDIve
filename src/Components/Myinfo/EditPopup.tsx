import { CSSProperties, useState } from "react";
import Modal from "react-modal";
import { PopupContainer } from "./styled";

Modal.setAppElement("#root");

const customStyles: Record<string, CSSProperties> = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "50vw",
    height: "35vh",
  },
};

interface EditPopupProps {
  isOpen: boolean;
  closeModal: () => void;
}

function EditPopup({ isOpen, closeModal }: EditPopupProps) {
  return (
    <Modal isOpen={isOpen} contentLabel="Popup Modal" style={customStyles}>
      <PopupContainer>
        <button id="closebtn" onClick={closeModal}>
          X
        </button>
      </PopupContainer>
    </Modal>
  );
}

export default EditPopup;
