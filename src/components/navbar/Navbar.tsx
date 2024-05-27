import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Links from "./Links";

export default function Navbar() {
  return (
    <nav
      className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all
    "
    >
      <MaxWidthWrapper>
        <div className="flex h-14 justify-between items-center border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            Case<span className="text-green-600">cobra</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <Links />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
