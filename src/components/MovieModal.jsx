// Movie Details Modal component

export default function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-red-600"
        >
          ✕
        </button>

        {/* Large Movie Image */}
        {show.image?.original && (
          <img
            src={show.image.original}
            alt={show.name}
            className="h-64 w-full object-cover md:h-80"
          />
        )}

        {/* Movie Details */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {show.name}
          </h2>

          {/* Rating & Release Date */}
          <div className="mt-4 flex flex-wrap gap-5 text-gray-600">
            <span>⭐ {show.rating?.average || "N/A"}</span>

            <span>📅 {show.premiered || "N/A"}</span>

            <span>🎬 {show.type || "N/A"}</span>
          </div>

          {/* Genres */}
          {show.genres?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="mt-7">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Overview
            </h3>

            <div
              className="leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: show.summary || "<p>No description available.</p>",
              }}
            />
          </div>

          {/* Additional Information */}
          <div className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
            {show.language && (
              <p>
                <span className="font-semibold text-gray-900">Language:</span>{" "}
                {show.language}
              </p>
            )}

            {show.status && (
              <p>
                <span className="font-semibold text-gray-900">Status:</span>{" "}
                {show.status}
              </p>
            )}

            {show.runtime && (
              <p>
                <span className="font-semibold text-gray-900">Runtime:</span>{" "}
                {show.runtime} min
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="mt-7 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
