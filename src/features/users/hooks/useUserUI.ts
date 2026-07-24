import type { UserDataType } from "@/features/users/types/user.types";
import { useState } from "react";

export const useUserUI = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserDataType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleOpenDialog = (id: number) => {
    setSelectedUserId(id);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedUserId(null);
  };

  const handleDeleteSelected = () => {
    console.log("Deleting selected users:", selectedUsers);
  };

  return {
    selectedUsers,
    setSelectedUsers,
    isOpen,
    setIsOpen,
    selectedUserId,
    handleOpenDialog,
    handleCloseDialog,
    handleDeleteSelected,
  };
};
