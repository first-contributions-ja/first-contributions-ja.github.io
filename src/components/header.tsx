import Link from "next/link";
import { SITE_NAME } from "../../lib/constants";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
  return (
    <header className="fixed w-full py-6 backdrop-blur-sm">
      <Link href="/">
        <h1 className="ml-7 inline text-xl font-bold text-red-600 transition hover:opacity-70">
          <GitHubIcon
            fontSize="large"
            className="mr-4 -translate-y-0.5 text-red-600"
          />
          {SITE_NAME}
        </h1>
      </Link>
    </header>
  );
}
