import { CSSProperties, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { MyInfoSaveBtn, PopupContainer } from "./styled";
import S3ImgInput, { S3ImgInputRef } from "./S3ImgInput";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import type { MyInfoValue } from "../../Interface/interface";
import { useForm } from "react-hook-form";

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
  nickname: string | undefined;
  onSearch: () => void;
}

function EditPopup({ isOpen, closeModal, nickname, onSearch }: EditPopupProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const axiosInstance = useAxiosWithAuth();
  const childComponentRef = useRef<S3ImgInputRef>(null);
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<MyInfoValue>({
    criteriaMode: "all",
    mode: "onChange",
  });

  const callChildFunction = () => {
    return new Promise((resolve) => {
      if (childComponentRef.current && childComponentRef.current.uploadS3) {
        childComponentRef.current.uploadS3().then(resolve);
      }
    });
  };

  const handleImageUploadSuccess = async (imageUrl: string) => {
    setImageSrc(imageUrl);
    await handleMyInfoSaveBtnClick(imageUrl);
  };

  const handleMyInfoSaveBtnClick = async (imageUrl: string) => {
    try {
      const updatedValues: MyInfoValue = {
        nickname: watch("nickname") ?? nickname,
        profileImgUrl: imageUrl,
      };
      await axiosInstance.patch("member", updatedValues);
      onSearch();
    } catch (error) {
      throw new Error("정보 수정 실패");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Popup Modal"
      style={customStyles}
      onRequestClose={closeModal}
    >
      <PopupContainer>
        <button id="closebtn" onClick={closeModal}>
          X
        </button>
        <input
          type="text"
          placeholder="아이디 (영소문자, 숫자 3~10자)"
          value={watch("nickname") ?? nickname}
          {...register("nickname", {
            pattern: {
              value: /^[\p{L}\p{N}]{3,10}$/u,
              message:
                "닉네임은 영어와 한글과 숫자 3~10자리로 이루어져야 합니다.",
            },
          })}
        />
        {errors.nickname && <span>{errors.nickname.message}</span>}
        <S3ImgInput
          ref={childComponentRef}
          onImageUploadSuccess={handleImageUploadSuccess}
        />

        <MyInfoSaveBtn
          onClick={() => {
            callChildFunction();
          }}
        >
          내 정보 변경하기
        </MyInfoSaveBtn>
      </PopupContainer>
    </Modal>
  );
}

export default EditPopup;
