export default function Page() {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Availability Presets</h1>
          <button className="text-blue-500">+</button>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">👤</span>
          <span className="text-blue-500">Owned by me</span>
        </div>
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
          <div className="flex items-center">
            <span className="bg-white border-2 border-gray-300 rounded-full w-6 h-6 mr-2"></span>
            <span>Damilola John</span>
          </div>
          <button className="text-blue-500">+</button>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Work Hours</h2>
            <span className="text-gray-500">Default</span>
          </div>
          <p className="text-gray-600">Weekdays, 9:00 am - 5:00 pm</p>
        </div>
      </div>
      {/* <div>
        <h1 className="text-xl font-semibold p-10 text-accent block ">
          Availability Presets
        </h1>
      </div> */}
    </>
  );
}
