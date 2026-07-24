import { query_keys } from "@/features/users/api/queryKeys";
import type { UserDataType } from "@/features/users/types/user.types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getUsers } from "../api/userApi";

const useUser = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserDataType[]>([]);

  const handleDeleteSelected = () => {
    console.log(selectedUsers);
  };

  const { data, isPending } = useQuery({
    queryKey: [query_keys.USERS],
    queryFn: getUsers,
  });

  return {
    handleDeleteSelected,
    setSelectedUsers,
    selectedUsers,
    data: data,
    isPending,
  };
};

export default useUser;
