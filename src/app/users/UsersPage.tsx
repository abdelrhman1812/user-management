import { DialogUpdateUser } from "@/features/users/components/DialogUpdateUser";
import UserTable from "@/features/users/components/UserTable";
import { useUserUI } from "@/features/users/hooks/useUserUI";

const UsersPage = () => {
  const { handleOpenDialog, isOpen, selectedUserId, setIsOpen } = useUserUI();

  return (
    <>
      <UserTable onUpdate={handleOpenDialog} />

      <DialogUpdateUser
        isOpen={isOpen}
        userId={selectedUserId}
        onOpenChange={setIsOpen}
      />
    </>
  );
};

export default UsersPage;
