import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Phone from "../Hero/Phone";

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgsrc: string;
}
export default function Review(props: ReviewProps) {
  const { imgsrc, className } = props;
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const randomIndexDelay = Math.floor(
    Math.random() * POSSIBLE_ANIMATION_DELAYS.length
  );

  const animationDelay = POSSIBLE_ANIMATION_DELAYS[randomIndexDelay];

  return (
    <div
      className={cn(
        "animate-fadeIn rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      {...props}
      style={{ animationDelay }}
    >
      <Phone imgsrc={imgsrc} />
    </div>
  );
}
