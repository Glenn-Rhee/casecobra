import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ReviewGrid from "./ReviewGrid";

export default function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        aria-hidden="true"
        src={"/what-people-are-buying.png"}
        alt="Review image"
        width={193}
        height={143}
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
