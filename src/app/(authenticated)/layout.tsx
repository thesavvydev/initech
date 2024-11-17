import LayoutSidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full flex">
      <LayoutSidebar />
      <div className="flex flex-col gap-6 p-6 w-full">{children}</div>
    </main>
  );
}
