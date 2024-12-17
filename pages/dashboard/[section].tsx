import { useRouter } from "next/router";
import StarredProjects from "@/components/dashboard/StarredProjects";
import Templates from "@/components/dashboard/Templates";
import RecentlyDeleted from "@/components/dashboard/RecentlyDeleted";
import Sidebar from "@/components/Sidebar";

export default function DashboardSection() {
  const router = useRouter();
  const { section } = router.query;

  return (
    <div className="flex space-x-4 h-screen">
      <Sidebar />
      {section === "starred-projects" && <StarredProjects />}
      {section === "templates" && <Templates />}
      {section === "recently-deleted" && <RecentlyDeleted />}
    </div>
  );
}
