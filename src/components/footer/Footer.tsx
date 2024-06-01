import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { footerLinks } from "@/utils/landing-page";

export default function Footer() {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200 " />
        <div className="h-full md:flex-row md:justify-between justify-center items-center flex flex-col">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All right reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              {footerLinks.map((link, i) => (
                <Link
                  href={"#"}
                  key={i}
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
