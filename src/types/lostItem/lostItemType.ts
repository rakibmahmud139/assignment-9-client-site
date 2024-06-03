import { TCategory, TUser } from "..";

export type TLostItem = {
  id: string;
  userId: string;
  categoryId: string;
  lostItemName: string;
  description: string;
  location: string;
  found: boolean;
  contactNumber: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
  category: TCategory;
};
