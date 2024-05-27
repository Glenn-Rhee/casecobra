import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgsrc: string;
  dark?: boolean;
}

export default function Phone(props: PhoneProps) {
  const { className, imgsrc, dark = false } = props;

  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 relative select-none h5"
        alt="Phone Image"
        width={896}
        height={1831}
      />
      <div className="absolute z-10 inset-0">
        <Image
          className="object-cover min-w-full min-h-full"
          src={imgsrc}
          alt="Overlaying phone image"
          width={896}
          height={1831}
        />
      </div>
    </div>
  );
}
