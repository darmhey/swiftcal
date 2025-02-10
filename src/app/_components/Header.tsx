import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    <>
      <div className="absolute w-screen pt-8 ">
        <div className=" bg-white border rounded-full max-w-4xl mx-auto flex flex-row justify-between">
          <div>
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
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default Header;
