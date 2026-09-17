import { Link } from "react-router-dom";
import logo from "../assets/movieExplorerLogo.png";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-green-200">
      <div className="mx-auto flex max-w-375 items-center justify-between px-2 py-3">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>

        {/* Movies Button */}
        <Link
          to="/movies"
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Movies
        </Link>
      </div>
    </nav>
  );
}
