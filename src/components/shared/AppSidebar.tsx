import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Users } from "lucide-react";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="px-2 py-4">
          <h2 className="font-semibold">Admin</h2>
          <p className="text-xs text-muted-foreground">Admin Dashboard</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Users />
                <span>User Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <p className="text-sm font-medium">Abdelrhman Ali</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
