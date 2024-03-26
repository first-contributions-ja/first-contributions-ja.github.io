import { SITE_NAME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-red-600 py-2 text-center text-white">
      <small>&copy; {SITE_NAME}</small>
    </footer>
  );
}
