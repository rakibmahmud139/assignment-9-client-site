import { USER_ROLE } from "@/constant/role";
import { DrawerItem, UserRole } from "@/types";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

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
          title: "Profile",
          path: `${role}`,
          icon: PersonIcon,
        },
        {
          title: "User Management",
          path: `${role}/user-management`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Recent Posts",
          path: `${role}/recent-posts`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Change Password",
          path: `change-password`,
          icon: KeyIcon,
        }
      );

      break;

    default:
      break;
  }

  return [...roleMenus];
};
