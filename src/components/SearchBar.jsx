// Search Bar component
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Search Input */}
      <div className="relative">
        {/* Search Icon */}
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl">
          🔍
        </span>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full rounded-xl border border-white/10 bg-teal-200 py-4 pl-14 pr-5 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
