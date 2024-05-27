import { USER_ROLE } from "@/constant/role";
import { DrawerItem, UserRole } from "@/types";
import CategoryIcon from "@mui/icons-material/Category";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Profile",
          path: `${role}`,
          icon: PersonIcon,
        },
        {
          title: "My Claim Item",
          path: `${role}/my-claim-item`,
          icon: GroupIcon,
        },
        {
          title: "My Lost Item",
          path: `${role}/my-lost-item`,
          icon: GroupIcon,
        },
        {
          title: "My Found Item",
          path: `${role}/my-found-item`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: PeopleIcon,
        },
        {
          title: "metrics",
          path: `${role}`,
          icon: EqualizerIcon,
        },
        {
          title: "Recent Lost Items",
          path: `${role}/lost-items`,
          icon: CategoryIcon,
        },
        {
          title: "Recent Found Items",
          path: `${role}/found-items`,
          icon: ProductionQuantityLimitsIcon,
        }
      );

      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
