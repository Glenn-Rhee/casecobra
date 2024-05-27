import { superiorities } from "@/utils/landing-page";
import Superiority from "./Superiority";

export default function DescHero() {
  return (
    <>
      <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
        Capture your favorite memories with your own,{" "}
        <span className="font-semibold">one-of-one</span> phone case. CaseCobra
        allows you to protect your memories, not just your phone case.
      </p>
      <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
        <div className="space-y-2">
          {superiorities.map((s, i) => (
            <Superiority superiority={s} key={i} />
          ))}
        </div>
      </ul>
    </>
  );
}
