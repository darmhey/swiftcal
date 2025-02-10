import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="absolute w-screen pt-8 ">
        <div className=" bg-white border rounded-full p-4 max-w-4xl mx-auto flex flex-row justify-between">
          <div>
            <Link href="/">
              <div className="flex flex-row">
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
          <div>other header</div>
        </div>
      </div>
    </>
  );
}

export default Header;
