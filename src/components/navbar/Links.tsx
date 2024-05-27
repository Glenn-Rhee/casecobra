import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Links() {
  const user = undefined;
  const isAdmin = undefined;

  return (
    <>
      {user ? (
        <>
          <Link
            href={"/api/auth/logout"}
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            Sign out
          </Link>
          {isAdmin ? (
            <Link
              href={"/api/auth/logout"}
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Dashboard
            </Link>
          ) : null}
          <Link
            href={"/configure/upload"}
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:flex items-center gap-1",
            })}
          >
            Create Case
            <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>
        </>
      ) : (
        <>
          <Link
            href={"/api/auth/register"}
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            Sign up
          </Link>
          <Link
            href={"/api/auth/login"}
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:flex items-center gap-1",
            })}
          >
            Login
            <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>

          <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

          <Link
            href={"/configure/upload"}
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:flex items-center gap-1",
            })}
          >
            Create Case
            <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>
        </>
      )}
    </>
  );
}
