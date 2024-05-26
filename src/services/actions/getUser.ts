import { DecodedUser, authKey } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: DecodedUser = jwtDecode(authToken);

    return {
      ...decodedData,
      role: decodedData?.role,
    };
  }
};
