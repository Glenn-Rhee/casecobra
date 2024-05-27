import TitleHero from "./TitleHero";
import DescHero from "./DescHero";
import TestiHero from "./TestiHero";

export default function MainLeft() {
  return (
    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
      <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
        <TitleHero />
        <DescHero />
        <TestiHero />
      </div>
    </div>
  );
}
