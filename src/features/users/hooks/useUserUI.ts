import type { UserDataType } from "@/features/users/types/user.types";
import { useState } from "react";

export const useUserUI = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserDataType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const [userToDelete, setUserToDelete] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const handleOpenDialog = (id: number) => {
    setSelectedUserId(id);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedUserId(null);
  };

  // const handleDeleteSelected = () => {
  //   console.log(selectedUsers);
  // };

  const handleConfirmDelete = (
    deleteMutateFn: (
      data: { id: number },
      options?: {
        onSuccess?: () => void;
      },
    ) => void,
  ) => {
    if (!userToDelete) return;

    deleteMutateFn(
      { id: userToDelete.id },
      {
        onSuccess: () => {
          setUserToDelete(null);
        },
      },
    );
  };

  /* Delete Bulk Users */

  return {
    selectedUsers,
    setSelectedUsers,
    isOpen,
    setIsOpen,
    selectedUserId,
    handleOpenDialog,
    handleCloseDialog,
    handleConfirmDelete,
    userToDelete,
    setUserToDelete,
  };
};
