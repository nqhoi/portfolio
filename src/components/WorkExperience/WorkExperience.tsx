import ExperienceCard from "../ExperienceCard/ExperienceCard";

export default function WorkExperience() {
  return (
    <div
      className="min-h-screen flex relative overflow-hidden flex-col text-left  max-w-full px-10
    justify-evenly mx-auto items-center"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 p-10 snap-x snap-mandatory justify-center">
        <ExperienceCard />
      </div>
    </div>
  );
}
