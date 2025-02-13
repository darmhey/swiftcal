export default function Page() {
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Scheduling Links</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            New scheduling link
          </button>
        </div>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Search links"
            className="px-3 py-2 border rounded-md"
          />
          <select className="px-3 py-2 border rounded-md">
            <option>People & Teams</option>
            <option>All</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Attendance</option>
            <option>I&apos;m Attending</option>
          </select>
          <select className="px-3 py-2 border rounded-md">
            <option>Status</option>
            <option>Active or Disabled</option>
          </select>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold">Damiola John</p>
                <p className="text-sm text-blue-500">
                  savvycal.com/johnnasco19
                </p>
              </div>
            </div>
            <button className="ml-auto text-sm text-blue-500">
              Edit profile
            </button>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div>
                <p>Chat with Damiola</p>
                <p className="text-sm text-blue-500">
                  johnnasco19/chat-with-damiola
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Disabled</span>
              <span className="text-sm text-gray-500">30 min</span>
              <button className="text-sm text-blue-500">Preview</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col h-screen">
        <h1 className=" text-xl font-semibold p-10 text-accent block ">
          Schedule links
        </h1>
        <div className=" mx-10 rounded-lg  my-4 pl-8 py-4">
          <div className=" border-b bg-white_alt">
            {" "}
            <h1 className="font-semibold">Damilola John</h1>
            <p>swiftcal.com/johnasco19</p>
          </div>
          <div className="flex flex-row gap-3 bg-white">
            <h1 className="font-semibold ">Chat with Damilola</h1>
            <p>swiftcal.com/johnasco19</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
