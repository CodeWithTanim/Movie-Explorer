// Movie Card component
export default function MovieCard({ show, onDetails }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Movie Poster */}
      <div className="aspect-[2/3] overflow-hidden bg-gray-200">
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={show.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Movie Information */}
      <div className="p-5">
        {/* Movie Title */}
        <h2 className="truncate text-xl font-bold text-gray-900">
          {show.name}
        </h2>

        {/* Rating & Release Year */}
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <span>⭐ {show.rating?.average || "N/A"}</span>

          <span>📅 {show.premiered?.slice(0, 4) || "N/A"}</span>
        </div>

        {/* See Details Button */}
        <button
          type="button"
          onClick={() => onDetails(show)}
          className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
