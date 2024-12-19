import { calculateDaysDifference } from "@/utils/dateUtils";
import { Project } from "@/interfaces/projectInterface";

interface CardComponentProps {
  projects: Project[];
  gradient: string;
  title: string;
}

export default function CardComponent({
  projects,
  gradient,
  title,
}: CardComponentProps) {
  return (
    <main className="p-5">
      <div>
        <h2 className="text-3xl text-bold">{title}</h2>
        <section className="pt-2">
          <ul className="flex flex-wrap -mx-2 -my-2">
            {projects.map((project: Project, index: number) => (
              <button key={index}>
                <li
                  className={`bg-gradient-to-br ${gradient} w-48 h-48 m-2 flex flex-col justify-center items-center p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl`}
                >
                  <h3 className="text-white text-lg font-bold">
                    {project.title}
                  </h3>
                  <h4 className="text-gray-300">{project.framework}</h4>
                  <h4 className="text-gray-300">{project.creator}</h4>
                  <h4 className="text-gray-300">
                    {calculateDaysDifference(project.dateCreated)}
                  </h4>
                </li>
              </button>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
