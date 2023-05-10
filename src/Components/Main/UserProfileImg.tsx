import { useState } from "react";
import { ProfileImg } from "./styled";

interface UserProfileImgProps {
  profileImgUrl: string;
}

export default function UserProfileImg({ profileImgUrl }: UserProfileImgProps) {
  const [imageSrc, setImageSrc] = useState(profileImgUrl);
  const handleImageError = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/img/profileicon.PNG`);
  };

  return (
    <>
      <ProfileImg>
        <img
          src={profileImgUrl}
          onError={handleImageError}
          alt="User Profile"
        />
      </ProfileImg>
    </>
  );
}
