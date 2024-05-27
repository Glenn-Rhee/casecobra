import Image from "next/image";

export default function TitleHero() {
  return (
    <>
      <div className="absolute w-28 left-0 -top-20 hidden lg:block">
        <Image
          src={"/snake-1.png"}
          alt="Snake Picture"
          width={824}
          height={633}
          className="w-full"
        />
      </div>
      <h1 className="relative w-fit tracking-tighter text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
        Your Image on a{" "}
        <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
      </h1>
    </>
  );
}
