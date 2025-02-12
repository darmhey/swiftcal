import Link from "next/link";
import Image from "next/image";
export default function SideNavigation() {
  return (
    <>
      <div className=" flex flex-col h-screen w-1/6 border-r ">
        <div className=" flex-none my-4 border-b-2">
          {" "}
          <Link href="/">
            <div className="flex flex-row  p-4">
              <Image
                src="swiftcal.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="ml-2"
              />
              <h1 className=" italic text-xl pl-4">SwiftCal</h1>
            </div>
          </Link>
        </div>
        <div className=" grow flex flex-col justify-between mb-24 ">
          <ul className="flex flex-col justify-center items-center text-[18px] p-1 gap-3">
            <li className="bg-accent rounded-full  flex gap-2 py-3 px-5 font-semibold ">
              <Image
                src="plus.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule">New Schedule</Link>
            </li>
            <li className=" hover:bg-gray-300 rounded-md duration-300 ease-in-out flex gap-2 py-3 px-5 font-semibold w-full ">
              <Image
                src="links.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule/scheduleLinks">Scheduling links</Link>
            </li>
            <li className=" hover:bg-gray-300 rounded-md  duration-300 ease-in-out flex gap-2 py-3 px-5 font-semibold w-full">
              <Image
                src="availability.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule/availability">Availability</Link>
            </li>
            <li className=" hover:bg-gray-300 rounded-md  duration-300 ease-in-out flex gap-2 py-3 px-5 font-semibold w-full ">
              <Image
                src="bookings.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule/bookings">Bookings</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            {" "}
            <li className=" hover:bg-gray-300 rounded-md duration-300 ease-in-out flex gap-2 py-3 px-5 font-semibold w-full ">
              <Image
                src="profile.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule/profile">Profile</Link>
            </li>
            <li className=" hover:bg-gray-300 rounded-md duration-300 ease-in-out flex gap-2 py-3 px-5 font-semibold w-full ">
              <Image
                src="settings.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="ml-2"
              />
              <Link href="/schedule/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
