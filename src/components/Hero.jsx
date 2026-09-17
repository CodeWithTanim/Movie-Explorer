import { Link } from "react-router-dom";
import heroBanner from "../assets/Hero-Banner.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBanner})`,
      }}
    >
      {/* darkOverlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Welcome to Movie Explorer
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Discover Movies
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Explore and discover your favourite movies from around the world
          </p>

          {/* Button */}
          <Link
            to="/movies"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}
