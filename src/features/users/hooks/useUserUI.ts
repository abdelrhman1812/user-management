import type { UserDataType } from "@/features/users/types/user.types";
import { useState } from "react";
import { toast } from "react-toastify";

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
        onError?: (error: Error) => void;
      },
    ) => void,
  ) => {
    if (!userToDelete) return;

    deleteMutateFn(
      { id: userToDelete.id },
      {
        onSuccess: () => {
          toast.success("User deleted successfully!");
          setUserToDelete(null);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

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
