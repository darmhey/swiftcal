import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="w-5/6 flex flex-col h-screen">
        <h1 className="text-xl font-semibold p-10 text-accent block ">
          Create Schedule link
        </h1>
        <div className=" flex-1 flex gap-2 flex-col justify-start pt-10 items-center">
          <Image
            src="links.svg"
            alt="Arrow"
            width={80}
            height={80}
            className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 rounded-lg"
          />
          <h1 className="font-semibold text-xl">New Scheduling link</h1>
          <p className=" text-gray-500 font-gray ">
            Create a shareable link that will let others book a meeting with
            you.
          </p>

          <form className=" flex flex-col px-6 gap-3" action="">
            <label htmlFor="link-title" className="text-gray-700 font-medium">
              Link Title
            </label>
            <input
              type="text"
              id="link-title"
              placeholder="Enter link title"
              className="w-[550px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <h3>Link URL</h3>
            <p className="bg-white text-gray-500 border-gray-300 rounded-lg p-4">
              swiftcal.com/johnasco19/chat-with-damilola
            </p>
            <div className="flex flex-row justify-center gap-4">
              <button
                className="bg-white border border-gray-500 rounded-lg p-3"
                type="button"
              >
                cancel
              </button>
              <button className="bg-accent rounded-lg p-3" type="submit">
                create new link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
