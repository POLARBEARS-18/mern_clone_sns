export interface PostAxios {
  config: any[];
  data: PostType;
  headers: any[];
  request: any[];
  status: number;
  statusText: string;
}

export interface PostResult<T> {
  _doc: T;
}

export interface PostType extends PostResult<PostType> {
  _id: string;
  userId: string;
  desc: string;
  img: string;
  likes: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
