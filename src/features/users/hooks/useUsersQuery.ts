import { query_keys } from "@/features/users/api/queryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserDetails, getUsers, updateUserData } from "../api/userApi";
import type { UpdateUserFormValues } from "../schema/userSchema";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [query_keys.USERS],
    queryFn: getUsers,
  });
};

export const useGetUserDetails = (id: number | null) => {
  return useQuery({
    queryKey: [query_keys.USERS, id],
    queryFn: () => getUserDetails(id!),
    enabled: !!id,
  });
};

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
