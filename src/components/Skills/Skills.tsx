import Skill from "../Skill/Skill";

const MockSkillsFE: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqqmAvXe4VpXQ9-iIsKA8yPD3lN4y7Z1aCKxX6s5q8MxpdP9gl7uEX82TZ529SH4xVsI&usqp=CAU",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
];

const MockSkillsBE: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
];

export default function Skills() {
  return (
    <div
      className="flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-4">
        {MockSkillsFE.map((skill, index) => (
          <Skill key={index} skill={skill} directionLeft={true} />
        ))}
        {MockSkillsBE.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
