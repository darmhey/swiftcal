export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Events</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Export
          </button>
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Upcoming
          </button>
          <button className="text-gray-500 pb-1">Past</button>
          <button className="text-gray-500 pb-1">Canceled</button>
        </div>
        <div className="flex space-x-2 mb-4">
          <div className="flex items-center border rounded-full px-3 py-1 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            Search events
          </div>
          <div className="flex items-center border rounded-full px-3 py-1 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            Attendance I&apos;m Attending
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="grid grid-cols-3 gap-4 mb-2 text-sm font-semibold text-gray-600">
            <div>Date</div>
            <div>Details</div>
            <div>Scheduled By</div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-xl font-semibold p-10 text-accent block ">
          Bookings
        </h1>
      </div> */}
    </>
  );
}
