export interface UserResult<T> {
  _doc: T;
}

export interface UserType extends UserResult<UserType> {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: Array<string>;
  followings: Array<string>;
  isAdmin: boolean;
  desc: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}
