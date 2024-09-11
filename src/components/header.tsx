import Link from "next/link";
import { SITE_NAME } from "../../lib/constants";
import Image from "next/image";
import { BASE_PATH } from "../app/page";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full py-3 backdrop-blur-sm lg:py-4">
      <Link href="/">
        <span className="ml-3 inline text-lg font-bold text-red-600 transition hover:opacity-70 lg:ml-5">
          <Image
            src={`${BASE_PATH}/logo.svg`}
            width={640}
            height={324}
            alt="logo"
            className="mr-2 inline-block w-[40px] lg:mr-4"
          />
          {SITE_NAME}
        </span>
      </Link>
    </header>
  );
}
