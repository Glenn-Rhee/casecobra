import MainLeft from "@/components/Hero/MainLeft";
import MainRight from "@/components/Hero/MainRight";
import { Icons } from "@/components/icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Reviews from "@/components/Review/Reviews";
import { reviews } from "@/utils/reviews";
import { Check, Star } from "lucide-react";
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
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order- mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
              What our{" "}
              <span className="relative px-2">
                customors{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <Image
              src={"/snake-2.png"}
              className="w-24 order-first lg:order-2"
              alt="Photo Snake"
              width={761}
              height={675}
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {reviews.map((review, i) => (
              <div
                className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
                key={i}
              >
                <div className="flex gap-0.5 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        className="h-5 w-5 text-green-600 fill-green-600"
                        key={i}
                      />
                    ))}
                </div>
                <div className="text-lg leading-8">
                  <p>
                    &quot;{review.reviewOne}{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      {review.highlight}
                    </span>
                    {review.reviewTwo}&quot;
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src={"/users/" + review.imgSrc}
                    alt="User pict"
                    width={300}
                    height={300}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchased</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
