import logo from "../assets/movieExplorerLogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#B9F8CF]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">
        {/* Logo || Name */}
        <div>
          <img src={logo} alt="MovieExplorer Logo" className="h-12 w-auto" />
          {/* Copyright */}
          <p className="mt-2 text-sm text-black">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {/* Facebook */}
          <a
            href="#"
            className="text-sm text-black transition hover:text-red-600"
          >
            Facebook
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="text-sm text-black transition hover:text-red-600"
          >
            Instagram
          </a>
          {/* Twitter */}
          <a
            href="#"
            className="text-sm text-black transition hover:text-red-600"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
