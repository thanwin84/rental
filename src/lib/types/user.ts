export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  isVerified: boolean;
  role: 'tanent' | 'manager';
  createdAt: string;
  updatedAt: string;
};
