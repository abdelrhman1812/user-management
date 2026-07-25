import { query_keys } from "@/features/users/api/queryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteUser,
  getUserDetails,
  getUsers,
  toggleUserStatus,
  updateUserData,
} from "../api/userApi";
import type { UpdateUserFormValues } from "../schema/userSchema";

/* Get Users */

export const useGetUsers = () => {
  return useQuery({
    queryKey: [query_keys.USERS],
    queryFn: getUsers,
  });
};

/* Get User Details */

export const useGetUserDetails = (id: number | null) => {
  return useQuery({
    queryKey: [query_keys.USERS, id],
    queryFn: () => getUserDetails(id!),
    enabled: !!id,
  });
};

/* Update User */

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateUserFormValues }) =>
      updateUserData(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [query_keys.USERS] });
    },
  });
};

/* Delete single User */

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number | string }) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [query_keys.USERS] });
    },
  });
};

/* Toggle User Status */

export const useToggleUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleUserStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [query_keys.USERS] });
    },
  });
};
