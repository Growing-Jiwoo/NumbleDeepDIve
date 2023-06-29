import { useEffect, useState } from "react";
import { ProfileImg } from "./styled";

interface UserProfileImgProps {
  profileImgUrl?: string;
}

export default function UserProfileImg({ profileImgUrl }: UserProfileImgProps) {
  const [imageSrc, setImageSrc] = useState(profileImgUrl);
  const handleImageError = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/img/profileicon.png`);
  };

  useEffect(() => {
    setImageSrc(profileImgUrl);
  }, [profileImgUrl]);

  return (
    <>
      <ProfileImg>
        <img src={imageSrc} onError={handleImageError} alt="User Profile" />
      </ProfileImg>
    </>
  );
}
