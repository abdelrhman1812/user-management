import * as z from "zod";
const updateUserSchema = z.object({
  image: z.string().url("Please enter a valid URL"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["Admin", "Manager", "User"], {
    message: "Please select a role",
  }),
  status: z.enum(["Active", "Inactive"], {
    message: "Please select a status",
  }),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;
export default updateUserSchema;
