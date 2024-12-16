import { useRouter } from "next/router";

export default function DashboardSection() {
  const router = useRouter();
  const { section } = router.query;

  return <main>{section === "projects" && <Projects />}</main>;
}
