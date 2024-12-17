import { calculateDaysDifference } from "../../utils/dateUtils";

export default function StarredProjects() {
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

  return (
    <main className="p-5">
      <div>
        <h2 className="text-3xl text-bold">Starred Projects</h2>
        <section className="pt-2">
          {/* This is where all the user's projects will be displayed. */}
          {/* Attributes: Framework, Creator, Date Created, Title */}
          <ul className="flex flex-wrap -mx-2 -my-2">
            {projects.map((project, index) => (
              <button>
                <li
                  key={index}
                  className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-800 w-48 h-48 m-2 flex flex-col justify-center items-center p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-white text-lg font-bold">
                    {project.title}
                  </h3>
                  <h4 className="text-gray-600">{project.framework}</h4>
                  <h4 className="text-gray-600">{project.creator}</h4>
                  <h4 className="text-gray-600">
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
