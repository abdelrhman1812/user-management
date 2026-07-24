import { endPoints } from "@/features/users/api/endpoints";
import apiClient from "@/services/clientApi";
import type { UserDataType } from "../types/user.types";

export const getUsers = async (): Promise<UserDataType[]> => {
  const { data } = await apiClient.get<UserDataType[]>(endPoints.USERS);
  return data;
};
