import { cn } from "@/lib/utils";
import { imageUsers } from "@/utils/landing-page";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestiHero() {
  return (
    <div className="mt-12 flex flex-col sm:flex-col sm:justify-center justify-start items-start sm:items-center gap-5">
      <div className="flex -space-x-4">
        {imageUsers.map((img, i) => {
          const isLastIndex = i === imageUsers.length - 1;
          return (
            <Image
              height={40}
              width={40}
              className={cn("inline-block rounded-full ring-2 ring-slate-100", {
                "object-cover": isLastIndex,
              })}
              src={`/users/${img}`}
              alt="User Image"
              key={i}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-between items-start sm:items-center">
        <div className="flex gap-0.5">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star className="h-4 w-4 text-green-600 fill-green-600" key={i} />
            ))}
        </div>
        <p>
          <span className="font-semibold">1.250</span> happy customers
        </p>
      </div>
    </div>
  );
}
