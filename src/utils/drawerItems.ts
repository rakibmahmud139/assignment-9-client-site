import { USER_ROLE } from "@/constant/role";
import { DrawerItem, UserRole } from "@/types";
import CategoryIcon from "@mui/icons-material/Category";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AddIcon from "@mui/icons-material/Add";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: EqualizerIcon,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: PersonIcon,
        },
        {
          title: "My Claim Item",
          path: `${role}/my-claim-item`,
          icon: WidgetsIcon,
        },
        {
          title: "My Lost Item",
          path: `${role}/my-lost-item`,
          icon: WidgetsIcon,
        },
        {
          title: "My Found Item",
          path: `${role}/my-found-item`,
          icon: WidgetsIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: EqualizerIcon,
        },
        {
          title: "My Profile",
          path: `${role}/admin-profile`,
          icon: PersonIcon,
        },
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: PeopleIcon,
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
        },
        {
          title: "Add Category",
          path: `${role}/addCategory`,
          icon: AddIcon,
        }
      );

      break;

    default:
      break;
  }

  return [...roleMenus];
};
