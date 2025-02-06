import Image from "next/image";
import Link from "next/link";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <section className="w-screen bg-main text-center">
      <div className="max-w-7xl mx-auto  border border-red-400 flex flex-col gap-8 justify-start items-center w-full ">
        <h1
          className={`text-6xl tracking-wide mt-32  w-[450px]  ${figtree.className}`}
        >
          Your Time, Your Schedule, Simplified.
        </h1>
        <p className="w-[750px] text-2xl">
          Streamline your meetings with a smart booking system that works around
          your availability. No more back-and-forth emails.
        </p>

        <Link
          className="mb-16 bg-accent rounded-full "
          href="https://google.com"
        >
          <div className=" px-10 py-6  flex items-center justify-center">
            <span className=" text-xl uppercase font-bold">Start For Free</span>
            <Image
              src="arroww.svg"
              alt="Arrow"
              width={30}
              height={30}
              className="ml-2"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
