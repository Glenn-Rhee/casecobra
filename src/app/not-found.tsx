import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex-col flex items-center justify-center">
      <h1 className="text-3xl text-center text-slate-800 font-bold ">
        Oops! 404 <span className="text-green-500">Page Not Found</span>
      </h1>
      <Link
        href={"/"}
        className={buttonVariants({
          className: "mt-4 font-semibold text-xl",
          size: "sm",
        })}
      >
        Back home
      </Link>
    </div>
  );
}
