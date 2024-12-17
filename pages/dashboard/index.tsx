import Sidebar from "@/components/Sidebar";
import Projects from "@/components/dashboard/Projects";

export default function Dashboard() {
  return (
    <div className="flex space-x-4 h-screen">
      <Sidebar />
      <main>
        {/* Two pages to appear: Projects */}
        <Projects />
      </main>
    </div>
  );
}
