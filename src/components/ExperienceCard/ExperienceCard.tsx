const MockSkillsFE: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqqmAvXe4VpXQ9-iIsKA8yPD3lN4y7Z1aCKxX6s5q8MxpdP9gl7uEX82TZ529SH4xVsI&usqp=CAU",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
];

export default function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
      bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <img
        className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Snt Solution | Oct 2021 - Mar 2023
        </h4>
        <p className="font-bold text-2xl mt-1">Intern Front-end Developer</p>
        <div className="flex space-x-2 my-2 gap-2">
          {MockSkillsFE.map((skill) => (
            <img className="h-10 w-10 rounded-full" src={skill} alt="" />
          ))}
        </div>

        <ul className="list-disc space-y-4 text-lg">
          <li>
            Experienced 4 projects: company product on NFT game, outsourced
            project: website comics and translation comics, and real estate.
          </li>
          <li>
            Work on ReactJS, NextJS Framework, Typescript, Provider Context API,
            or Recoil with database: MySql, Graphql.
          </li>
          <li>
            Perfected the user interface, pick up user stories, analyzed,
            designed, and write documents to clarify my work, and assessed UX
            and UI designs for technical feasibility.
          </li>
          <li>
            Handle save history, dashboard, and convert from PSD to canvas to
            handle text translation.
          </li>
          <li>Troubleshoot the interface and debug the application code.</li>
          <li>
            Collaborated with product team members and manager to implement new
            feature developments.
          </li>
          <li>Experienced in Responsive Design in projects</li>
          <li>
            Write unit testing with Jest and end-to-end testing with Cypress.
          </li>
          <li>
            Always do peer reviews with teammates to improve code quality and
            check the correction of dependencies and the system.
          </li>
        </ul>
      </div>
    </article>
  );
}
