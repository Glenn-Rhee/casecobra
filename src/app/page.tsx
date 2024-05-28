import BodyCustomers from "@/components/Hero/BodyCustomers";
import MainLeft from "@/components/Hero/MainLeft";
import MainRight from "@/components/Hero/MainRight";
import Phone from "@/components/Hero/Phone";
import TitleCustomers, { Title } from "@/components/Hero/TitleCustomers";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Reviews from "@/components/Review/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <MainLeft />
          <MainRight />
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <TitleCustomers />
          <BodyCustomers />
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
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
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
