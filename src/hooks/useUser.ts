import type { UserDataType } from "@/features/users/types/user.types";
import { useState } from "react";

const useUser = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserDataType[]>([]);

  const handleDeleteSelected = () => {
    console.log(selectedUsers);
  };

  return {
    handleDeleteSelected,
    setSelectedUsers,
    selectedUsers,
  };
};

export default useUser;
