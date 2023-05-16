import { CSSProperties, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { MyInfoSaveBtn, NickNameInput, PopupContainer } from "./styled";
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
  nickname: string | undefined;
  closeModal: () => void;
  onSearch: () => void;
}

function EditPopup({ isOpen, closeModal, nickname, onSearch }: EditPopupProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const axiosInstance = useAxiosWithAuth();
  const childComponentRef = useRef<S3ImgInputRef>(null);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<MyInfoValue>({
    criteriaMode: "all",
    mode: "onChange",
  });

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
      closeModal();
    } catch (error) {
      throw new Error("정보 수정 실패");
    }
  };

  const onSubmit = handleSubmit(async () => {
    if (childComponentRef.current && childComponentRef.current.uploadS3) {
      await childComponentRef.current.uploadS3();
    }
  });

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
        <form onSubmit={onSubmit}>
          <label>닉네임 변경하기</label>

          <NickNameInput
            type="text"
            placeholder="닉네임 (영어, 한글, 숫자 3~10자)"
            defaultValue={nickname}
            {...register("nickname", {
              pattern: {
                value: /^[\p{L}\p{N}]{3,10}$/u,
                message: "영어, 한글, 숫자 3~10자리로 이루어져야 합니다.",
              },
            })}
          />
          {errors.nickname && (
            <span id="errorMsg">{errors.nickname.message}</span>
          )}
          <hr />
          <label>프로필 이미지 변경하기</label>
          <S3ImgInput
            ref={childComponentRef}
            onImageUploadSuccess={handleImageUploadSuccess}
          />

          <MyInfoSaveBtn isValid={isValid} type="submit" disabled={!isValid}>
            내 정보 변경하기
          </MyInfoSaveBtn>
        </form>
      </PopupContainer>
    </Modal>
  );
}

export default EditPopup;
