import Sidebar from "@/components/Sidebar";
import CardComponent from "@/components/cards/CardComponent";
import Header from "@/components/Header";

const projects = [
  {
    framework: "React",
    creator: "Facebook",
    dateCreated: "2013-05-29",
    title: "A JavaScript library for building user interfaces",
  },
  {
    framework: "Angular",
    creator: "Google",
    dateCreated: "2010-10-20",
    title: "A platform for building mobile and desktop web applications",
  },
  {
    framework: "Vue",
    creator: "Evan You",
    dateCreated: "2014-02-01",
    title: "The Progressive JavaScript Framework",
  },
  {
    framework: "Svelte",
    creator: "Rich Harris",
    dateCreated: "2016-11-26",
    title: "Cybernetically enhanced web apps",
  },
];

export default function StarredProjects() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 space-x-4">
        <Sidebar />
        {/* Two pages to appear: Projects */}
        <CardComponent
          projects={projects}
          gradient="from-yellow-300 via-yellow-600 to-yellow-800"
          title="Starred Projects"
        />
      </div>
    </div>
  );
}
