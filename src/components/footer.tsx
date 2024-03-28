import { SITE_NAME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="py-4 text-center bg-red-600 text-white">
      <small>&copy; {SITE_NAME}</small>
    </footer>
  );
}
