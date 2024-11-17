import LayoutSidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full flex">
      <LayoutSidebar />
      {children}
    </main>
  );
}
