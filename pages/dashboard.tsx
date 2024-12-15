import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <main>
        {/* Two pages to appear: Projects + Recently Deleted */}
        This is the main content that is displayed based on what is selected on
        the sidebar.
      </main>
    </div>
  );
}