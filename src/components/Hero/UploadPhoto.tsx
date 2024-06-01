import Phone from "@/components/Hero/Phone";
import { Title } from "@/components/Hero/TitleCustomers";
import { buttonVariants } from "@/components/ui/button";
import { majorities } from "@/utils/landing-page";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UploadPhoto() {
  return (
    <>
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title
            firstSentence="Upload your photo and get "
            spanSentence="your own case"
            lastSentence=" now"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
          <Image
            alt="Image Arrow"
            src="/arrow.png"
            className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
            width={126}
            height={31}
          />

          <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bggray-900/5 justify-center flex ring-inset ring-gray-900/10 lg:rounded-2xl">
            <Image
              alt="Image horse"
              src="/raya-try.jpg"
              className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 w-auto h-auto"
              width={900}
              height={1600}
            />
          </div>
          <Phone className="w-60 relative" imgsrc="/raya-try.jpg" />
        </div>
      </div>

      <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
        {majorities.map((m, i) => (
          <li className="w-fit" key={i}>
            <Check className="w-5 h-5 text-green-600 inline mr-1.5" />
            {m}
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "lg",
            className: "mx-auto mt-8",
          })}
        >
          Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
        </Link>
      </div>
    </>
  );
}
