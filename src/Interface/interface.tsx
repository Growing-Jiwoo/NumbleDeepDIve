export interface UserData {
  userId: string;
  nickname: string;
  profileImgUrl: string;
}

export interface UserListArray {
  userList: UserData[];
  onSearch: () => void;
}
