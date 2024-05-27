import Image from "next/image";
import Phone from "./Phone";

export default function MainRight() {
  return (
    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
      <div className="relative md:max-w-xl">
        <Image
          src={"/your-image.png"}
          className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
          alt="Your Image"
          width={619}
          height={428}
        />
        <Image
          src={"/line.png"}
          className="absolute w-20 -left-6 -bottom-6 select-none"
          alt="Line"
          width={339}
          height={608}
        />
        <Phone className="w-64" imgsrc="/testi/ray.jpg" />
      </div>
    </div>
  );
}
