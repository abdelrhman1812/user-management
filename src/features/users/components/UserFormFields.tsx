import ErrorMsgInputs from "@/components/shared/ErrorMsgInputs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";
import type { UpdateUserFormValues } from "../schema/userSchema";

interface UserFormFieldsProps {
  register: UseFormRegister<UpdateUserFormValues>;
  control: Control<UpdateUserFormValues>;
  errors: FieldErrors<UpdateUserFormValues>;
  imageUrl?: string;
}

export function UserFormFields({
  register,
  control,
  errors,
  imageUrl,
}: UserFormFieldsProps) {
  return (
    <>
      {/* Image */}
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <div className="flex items-center gap-3">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="image_profile"
              className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150";
              }}
            />
          )}
          <Input
            id="image"
            placeholder="Enter url image"
            {...register("image")}
          />
        </div>
        <ErrorMsgInputs error={errors.image?.message} />
      </div>

      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" {...register("name")} />
        <ErrorMsgInputs error={errors.name?.message} />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          {...register("email")}
        />
        <ErrorMsgInputs error={errors.email?.message} />
      </div>

      {/* Role */}
      <div className="space-y-1">
        <Label htmlFor="role">Role</Label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <ErrorMsgInputs error={errors.role?.message} />
      </div>

      {/* Status */}
      <div className="space-y-1">
        <Label htmlFor="status">Status</Label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <ErrorMsgInputs error={errors.status?.message} />
      </div>
    </>
  );
}
