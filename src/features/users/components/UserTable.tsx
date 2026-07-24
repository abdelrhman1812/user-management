import DataTable from "@/components/shared/DataTable/DataTable";
import type { Column } from "@/components/shared/DataTable/dataTable.types";
import DropdownTableAction from "@/components/shared/DataTable/DropdownTableAction";
import { Switch } from "@/components/ui/switch";
import type { UserDataType } from "@/features/users/types/user.types";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useGetUsers } from "../hooks/useUsersQuery";
import { useUserUI } from "../hooks/useUserUI";
const UserTable = ({ onUpdate }: { onUpdate: (id: number) => void }) => {
  const { handleDeleteSelected, setSelectedUsers, selectedUsers } = useUserUI();

  const { data: users, isPending } = useGetUsers();
  const userColumns: Column<UserDataType>[] = [
    {
      key: "image",
      label: "Image",
      element: (item) => (
        <img
          src={item.image}
          alt={item.name}
          className="w-9 h-9 rounded-full object-cover border border-slate-200"
        />
      ),
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "status",
      label: "Status",
      element: (item) => (
        <span
          className={`px-2 py-0.5 text-xs rounded-full font-medium ${
            item.status === "Active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "id",
      label: "Actions",
      element: (user) => (
        <DropdownTableAction
          triggerIcon={<MoreVertical size={18} />}
          menuItems={[
            {
              label: "Edit",
              icon: <Pencil size={15} />,
              onClick: () => onUpdate(user.id),
            },
            {
              label: "Delete",
              icon: <Trash2 size={15} />,
              onClick: () => console.log("Delete", user.id),
            },
            {
              label: "Active",
              preventClose: true,
              element: <Switch checked={user.status === "Active"} />,
            },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        columns={userColumns}
        data={users ?? []}
        selectable
        onSelectionChange={setSelectedUsers}
        isPending={isPending}
        message="Users Table Empty"
      />
      {selectedUsers.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          className="mb-4 rounded bg-destructive px-4 py-2 text-white"
        >
          Delete Selected
        </button>
      )}
    </>
  );
};

export default UserTable;
