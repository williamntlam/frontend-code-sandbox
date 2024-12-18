import Sidebar from "@/components/Sidebar";
import Projects from "@/components/dashboard/Projects";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 space-x-4">
        <Sidebar />
        <main className="flex-1">
          {/* Two pages to appear: Projects */}
          <Projects />
        </main>
      </div>
    </div>
  );
}
