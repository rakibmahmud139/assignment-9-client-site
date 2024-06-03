import { TCategory, TUser } from "..";

export type TFoundItem = {
  id: string;
  userId: string;
  categoryId: string;
  foundItemName: string;
  description: string;
  date: string;
  location: string;
  contactNumber: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
  category: TCategory;
};
