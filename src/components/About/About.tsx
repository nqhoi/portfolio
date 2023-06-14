const MockAbout =
  " I'm Hoi, i started learning programming when I was freshman in college, during the 4-year period of study, I was familiar with and exposed to programming techniques, object-oriented, data structures. I have learned and experienced 2 years of Javascript and over a year Typescript and 1,5 year of ReactJS. In addition, the back-end side has an understanding of Nodejs, Express to support and implement. I am a sociable person, able to work well in a team even independently. love to learn and approach new technology especially Javascript. I want to become frontend master in near future and to be quality oriented full stack developer far into the future.";

export default function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <p className="text-2xl ">
          Duy Tân University | Technology Software | 2017 - 2022
        </p>
        <p className="text-base">{MockAbout}</p>
      </div>
    </div>
  );
}
