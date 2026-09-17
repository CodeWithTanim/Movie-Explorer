import MovieCard from "./MovieCard";

// Movie Grid component
export default function MovieGrid({ shows, onDetails }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Movie Cards */}
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onDetails={onDetails} />
      ))}
    </div>
  );
}
