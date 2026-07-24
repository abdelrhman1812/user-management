import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
import profile from "/profile.jpeg";
const TopBar = () => {
  return (
    <header className="h-14 border-b bg-background px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className={"text-primary"} />

        <h1 className="text-xl font-semibold">User Management</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border p-2 hover:bg-accent transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover border"
          />

          <div className="hidden md:block">
            <p className="text-sm font-medium">Abdelrhman Ali</p>
            <p className="text-xs text-muted-foreground">
              abdelrhmanali1812@gmail.com
            </p>
          </div>
        </div>{" "}
      </div>
    </header>
  );
};

export default TopBar;
