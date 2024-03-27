import { SITE_NAME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="py-2 text-center text-red-600 md:bg-red-600 md:text-white">
      <small>&copy; {SITE_NAME}</small>
    </footer>
  );
}
