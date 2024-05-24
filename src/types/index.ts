import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TUser = {
  id: string;
  name: string;
  email: string;
  role?: "admin" | "user";
  createdAt: string;
  updatedAt: string;
  userProfile: TUserProfile;
};

export type TUserProfile = {
  id: string;
  bio: string;
  photoUrl?: string;
  age: number;
  createdAt: string;
  updatedAt: string;
};

export type TCategory = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TLostItem = {
  id: string;
  userId: string;
  categoryId: string;
  lostItemName: string;
  description: string;
  location?: string | null;
  isFound?: string | null;
  contactNumber: string | null;
  photo: string | StaticImport;
  createdAt: string;
  updatedAt: string;
  user: TUser;
  category: TCategory;
};

export const authKey = "accessToken";

export type TMeta = {
  page?: number;
  limit?: number;
  total?: number;
};