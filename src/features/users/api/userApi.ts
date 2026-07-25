import { endPoints } from "@/features/users/api/endpoints";
import apiClient from "@/services/clientApi";
import type { UpdateUserFormValues } from "../schema/userSchema";
import type { UserDataType } from "../types/user.types";

/* Get User */

export const getUsers = async (): Promise<UserDataType[]> => {
  const { data } = await apiClient.get<UserDataType[]>(endPoints.USERS);
  return data;
};

/* Get User Details */

export const getUserDetails = async (
  selectedUserId: number,
): Promise<UserDataType> => {
  const { data } = await apiClient.get<UserDataType>(
    `${endPoints.USERS}/${selectedUserId}`,
  );

  return data;
};

/* Update User */

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

/* Delete User */

export const deleteUser = async (
  selectedUserId: number | string,
): Promise<UserDataType> => {
  const { data } = await apiClient.delete<UserDataType>(
    `${endPoints.USERS}/${selectedUserId}`,
  );

  return data;
};

/* Toggle Active */
export const toggleUserStatus = async ({
  id,
  status,
}: {
  id: number | string;
  status: "Active" | "Deactivate";
}): Promise<UserDataType> => {
  const { data } = await apiClient.patch<UserDataType>(
    `${endPoints.USERS}/${id}`,
    { status },
  );
  return data;
};
