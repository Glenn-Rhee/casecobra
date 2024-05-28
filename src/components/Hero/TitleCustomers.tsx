import Image from "next/image";
import { Icons } from "../icons/Icons";
import { cn } from "@/lib/utils";

interface TitleProps {
  firstSentence: string;
  spanSentence: string;
  lastSentence: string;
  children?: React.ReactNode;
}

export function Title(props: TitleProps) {
  const { firstSentence, spanSentence, lastSentence, children } = props;

  return (
    <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
      {firstSentence}
      <span
        className={cn("relative px-2", {
          "bg-green-600 text-white": !children,
        })}
      >
        {spanSentence}
        {children}
      </span>{" "}
      {lastSentence}
    </h2>
  );
}

export default function TitleCustomers() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
      <Title
        firstSentence="What our "
        spanSentence="customers"
        lastSentence=" say"
      >
        <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
      </Title>
      <Image
        src={"/snake-2.png"}
        className="w-24 order-first lg:order-2"
        alt="Photo Snake"
        width={761}
        height={675}
      />
    </div>
  );
}
