import Link from "next/link";
import { SITE_NAME } from "../../lib/constants";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <header className="py-6 backdrop-blur-sm fixed w-full">
      <Link href="/">
        <h1 className="inline text-red-600 text-xl font-bold ml-7 hover:opacity-70 transition">
          <GitHubIcon fontSize="large" className="text-red-600 mr-4 -translate-y-0.5" />
          {SITE_NAME}
        </h1>
      </Link>
    </header>
  );
}