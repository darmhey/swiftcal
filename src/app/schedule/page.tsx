import Link from "next/link";
import Image from "next/image";
import SideNavigation from "../_components/SideNavigation";
export default function Page() {
  return (
    <>
      <div className="bg-main_accent">
        <SideNavigation />
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
      schedule
    </>
  );
}
