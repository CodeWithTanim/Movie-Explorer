import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import Footer from "../components/Footer";

export default function Movies() {
  // Store movies/shows
  const [shows, setShows] = useState([]);

  // Store search query
  const [search, setSearch] = useState("");

  // Store selected show
  const [selectedShow, setSelectedShow] = useState(null);

  // Store loading state
  const [loading, setLoading] = useState(true);

  // Fetch all shows
  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://api.tvmaze.com/shows");

        const data = await response.json();

        setShows(data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  // Search shows
  useEffect(() => {
    if (!search.trim()) {
      return;
    }

    const searchShows = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`,
        );

        const data = await response.json();

        // Search API returns { score, show }
        const results = data.map((item) => item.show);

        setShows(results);
      } catch (error) {
        console.error("Error searching shows:", error);
      } finally {
        setLoading(false);
      }
    };

    searchShows();
  }, [search]);

  // Clear search and load all shows again
  const handleSearchChange = (value) => {
    setSearch(value);

    if (!value.trim()) {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => setShows(data))
        .catch((error) => console.error("Error fetching shows:", error));
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="px-6 pb-10 pt-16">
        <div className="mx-auto max-w-7xl">
          {/* Page Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              <span
                className="text-white"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Explore
              </span>{" "}
              <span className="text-blue-500">Movies</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-gray-200">
              Search and discover your favorite movies and shows from around the
              world.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar search={search} setSearch={handleSearchChange} />
        </div>
      </section>

      {/* Movie Section */}
      <main className="mx-auto max-w-7xl px-6 pb-16">
        {loading ? (
          /* Loading State */
          <div className="flex min-h-64 items-center justify-center">
            <p className="text-lg text-white">Loading movies...</p>
          </div>
        ) : shows.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-64 items-center justify-center">
            <p className="text-lg text-white">No movies found.</p>
          </div>
        ) : (
          /* Movie Grid */
          <MovieGrid shows={shows} onDetails={setSelectedShow} />
        )}
      </main>

      {/* Movie Details Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
