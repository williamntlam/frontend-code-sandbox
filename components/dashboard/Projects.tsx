export default function Projects() {
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
    <main>
      <h2 className="text-3xl text-bold">Projects</h2>
      <section>
        {/* This is where all the user's projects will be displayed. */}
        {/* Attributes: Framework, Creator, Date Created, Title */}
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project.framework}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
