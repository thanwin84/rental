export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  isVerified: boolean;
  role: 'tenant' | 'manager';
  createdAt: string;
  updatedAt: string;
};
