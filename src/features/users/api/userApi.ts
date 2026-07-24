import { endPoints } from "@/features/users/api/endpoints";
import apiClient from "@/services/clientApi";
import type { UpdateUserFormValues } from "../schema/userSchema";
import type { UserDataType } from "../types/user.types";

export const getUsers = async (): Promise<UserDataType[]> => {
  const { data } = await apiClient.get<UserDataType[]>(endPoints.USERS);
  return data;
};

export const getUserDetails = async (
  selectedUserId: number,
): Promise<UserDataType> => {
  const { data } = await apiClient.get<UserDataType>(
    `${endPoints.USERS}/${selectedUserId}`,
  );

  return data;
};

export const updateUserData = async (
  selectedUserId: number,
  updatedData: UpdateUserFormValues,
): Promise<UserDataType> => {
  const { data } = await apiClient.put<UserDataType>(
    `${endPoints.USERS}/${selectedUserId}`,
    updatedData,
  );

  return data;
};
