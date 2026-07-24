import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useGetUserDetails, useUpdateUser } from "../hooks/useUsersQuery";
import type { UpdateUserFormValues } from "../schema/userSchema";
import updateUserSchema from "../schema/userSchema";
import { UserFormFields } from "./UserFormFields";

export function DialogUpdateUser({
  isOpen,
  userId,
  onOpenChange,
}: {
  isOpen: boolean;
  userId: number | null;
  onOpenChange: (open: boolean) => void;
}) {
  const { data: user, isLoading } = useGetUserDetails(userId);
  const { mutate: updateUser, isPending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      image: "",
      name: "",
      email: "",
      role: "User",
      status: "Active",
    },
  });

  const imageUrl = watch("image");

  useEffect(() => {
    if (user) {
      reset({
        image: user.image || "",
        name: user.name || "",
        email: user.email || "",
        role: (user.role as "Admin" | "Manager" | "User") || "User",
        status: (user.status as "Active" | "Absent") || "Active",
      });
    }
  }, [user, reset]);

  const onSubmit = (values: UpdateUserFormValues) => {
    if (!userId) return;

    updateUser(
      { id: userId, data: values },
      {
        onSuccess: () => {
          const notify = () => toast("update done");
          notify();
          onOpenChange(false);
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-2">
          {isLoading ? (
            <div className="py-8 text-center text-sm text-slate-500">
              Loading user details...
            </div>
          ) : (
            <UserFormFields
              register={register}
              control={control}
              errors={errors}
              imageUrl={imageUrl}
            />
          )}

          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending || isLoading}>
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
