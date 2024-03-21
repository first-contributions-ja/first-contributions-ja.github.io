import { SITE_NAME } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white text-center py-2">
      <small>&copy; {SITE_NAME}</small>
    </footer>
  );
}
