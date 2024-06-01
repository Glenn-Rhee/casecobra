import BodyCustomers from "@/components/Hero/BodyCustomers";
import MainLeft from "@/components/Hero/MainLeft";
import MainRight from "@/components/Hero/MainRight";
import TitleCustomers from "@/components/Hero/TitleCustomers";
import UploadPhoto from "@/components/Hero/UploadPhoto";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Reviews from "@/components/Review/Reviews";

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
          <UploadPhoto />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
