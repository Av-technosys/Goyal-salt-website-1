interface Props {}

export default function JourneyItem({}: Props) {
  return (
    <div className="relative max-w-7xl mx-auto pl-40 pr-10">
      {/* RED DOT */}
      <div className="absolute left-20 h-4 w-4 bg-red-600 rounded-full" />

      {/* CARD */}
      <div className="bg-white rounded-xl shadow-md p-6 flex gap-6">
        {/* IMAGE */}
        <div className="w-[260px] h-[160px] rounded-lg overflow-hidden shrink-0">
          <img
            src="https://picsum.photos/600/400"
            alt="Journey"
            className="h-full w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-red-600 font-bold text-lg mb-2">
            1975 – Joined Family Business
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The family legacy began with strong values and humble beginnings.
          </p>
        </div>
      </div>
    </div>
  );
}
