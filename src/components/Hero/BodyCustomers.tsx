import { reviews } from "@/utils/reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function BodyCustomers() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
      {reviews.map((review, i) => (
        <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20" key={i}>
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
  );
}
