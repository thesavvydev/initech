import LayoutNavbar from "./layout-navbar";
import LayoutSidebar from "./layout-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full lg:flex">
      <LayoutSidebar />
      <LayoutNavbar />
      <div className="flex flex-col gap-6 p-6 w-full">{children}</div>
    </main>
  );
}
