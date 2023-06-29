import { useRef } from "react";
import Modal from "react-modal";
import {
  MyInfoSaveBtn,
  NickNameInput,
  PopupContainer,
  ModalStyles,
} from "./styled";
import S3ImgInput, { S3ImgInputRef } from "./S3ImgInput";
import useAxiosWithAuth from "../../hook/useAxiosWithAuth";
import type { MyInfoValue } from "../../@types/interface";
import { useForm } from "react-hook-form";

interface EditPopupProps {
  isOpen: boolean;
  nickname: string | undefined;
  closeModal: () => void;
  onSearch: () => void;
}

function EditPopup({ isOpen, closeModal, nickname, onSearch }: EditPopupProps) {
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

  async function handleImageUploadSuccess(imageUrl: string) {
    await handleMyInfoSaveBtnClick(imageUrl);
  }

  async function handleMyInfoSaveBtnClick(imageUrl: string) {
    try {
      const updatedValues: MyInfoValue = {
        nickname: watch("nickname") ?? nickname,
        profileImgUrl: imageUrl,
      };
      await axiosInstance.patch("member", updatedValues);
      onSearch();
      closeModal();
    } catch (error) {
      throw new Error("Failed to modify information");
    }
  }

  const onSubmit = handleSubmit(async () => {
    if (childComponentRef.current && childComponentRef.current.uploadS3) {
      await childComponentRef.current.uploadS3();
    }
  });

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Popup Modal"
      style={ModalStyles}
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
