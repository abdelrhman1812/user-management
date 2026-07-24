import { SidebarProvider } from "@/components/ui/sidebar";
import UsersPage from "./app/users/UsersPage";
import AppSidebar from "./components/shared/AppSidebar";
import TopBar from "./components/shared/TopBar";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background text-foreground transition-colors duration-200">
          <AppSidebar />

          <div className="flex-1 flex flex-col min-w-0">
            <TopBar />

            <main className="p-6 flex-1 overflow-y-auto bg-slate-50">
              <UsersPage />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default App;
