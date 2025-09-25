import Sidebar from "@/components/sidebar";

function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default WithSidebarLayout;