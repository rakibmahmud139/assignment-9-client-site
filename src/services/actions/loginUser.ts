"use server";

import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const res = await fetch(
    `https://assignment-9-server-lyart.vercel.app/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const userInfo = await res.json();

  return userInfo;
};
