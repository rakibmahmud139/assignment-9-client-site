import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
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
  date: string;
  createdAt: string;
  updatedAt: string;
  user: TUser;
  category: TCategory;
};

export const authKey = "accessToken";

export type TDecodedUser = {
  role: "user" | "admin";
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  iat: number;
  exp: number;
};

export type TMeta = {
  page?: number;
  limit?: number;
  total?: number;
};

export type DrawerItem = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
};

export type UserRole = keyof typeof USER_ROLE;

export type DecodedUser = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  photoUrl: string;
  iat: number;
  exp: number;
};

export type TMetaData = [
  {
    totalClaimItems: number;
    totalLostItems: number;
    totalFoundItems: number;
  }
];
