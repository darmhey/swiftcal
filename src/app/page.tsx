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
    <>
      <section className="w-screen bg-main text-center">
        <div className="max-w-7xl mx-auto  flex flex-col gap-8 justify-start items-center w-full ">
          <h1
            className={`text-4xl md:text-6xl md:tracking-wide mt-32  md:w-[450px]  ${figtree.className}`}
          >
            Your Time, Your Schedule, Simplified.
          </h1>
          <p className="md:w-[750px] text-2xl">
            Streamline your meetings with a smart booking system that works
            around your availability. No more back-and-forth emails.
          </p>

          <Link href="/login" className="mb-48 bg-accent rounded-full ">
            <div className=" px-10 py-6  flex items-center justify-center">
              <span className=" text-xl uppercase font-bold">
                Start For Free
              </span>
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
      {/* ilhnuu
      g hgjkhkj
      hjkhjhkl */}
      <section className="w-screen">
        <div className="flex flex-row justify-center  max-w-7xl mx-auto mt-[-90px] ">
          <Image
            src="/image-main.png"
            alt="Hero Image"
            width={1032}
            height={601}
          />
        </div>
      </section>

      <section className="w-screen bg-main_accent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-8 px-8 md:px-0">
          <div className="flex flex-col  gap-3 font-bold">
            <h1 className="{`text-2xl underline italic pb  ${figtree.className}`}">
              SwiftCal
            </h1>
            <h1 className="w-[400px] h-[157px] text-4xl">
              Built For Busy Professionals
            </h1>
          </div>

          <p className="md:w-[826px] text-2xl pt-0 md:pt-6">
            Whether you&apos;re a consultant, coach, or entrepreneur, our app
            helps you save time by automating your meeting bookings. Focus on
            what matters, and let your calendar handle the rest!
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col px-6 md:px-0 md:flex-row justify-between gap-4 pb-12">
          <div className="flex flex-col gap-4 bg-white border rounded-xl p-6">
            <Image
              src="/schedule.png"
              alt="schedule Image"
              width={40}
              height={40}
            />
            <p className=" font-bold text-3xl">Easy Scheduling</p>
            <p className=" w-[285px]">
              Share a single link, and let clients book based on your
              availability.
            </p>
          </div>
          <div className="flex flex-col gap-4 pb-14 bg-white border rounded-xl p-6">
            <Image
              src="/organizer.png"
              alt="organizer Image"
              width={40}
              height={40}
            />
            <p className=" font-bold text-3xl">Stay Organized</p>
            <p className=" w-[285px]">
              All your meetings in one dashboard and stay on top of your
              schedule.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-white border rounded-xl p-6">
            <Image src="/bulb.png" alt="bulb Image" width={40} height={40} />
            <p className=" font-bold text-3xl">Smart Reminders</p>
            <p className=" w-[285px]">
              Reduce no-shows with automatic email notifications for bookings.
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen py-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-12 text-center">
          <h1 className=" font-semibold text-4xl md:text-6xl">
            Solution for Entrepreneurs
          </h1>
          <p className="md:w-[999px] text-xl px-6 md:px-0  ">
            Smart booking system that moves around your availability Coordinate
            effortlessly with team members and clients. Share your availability,
            avoid conflicts, and keep everyone on the same page—no more endless
            email threads!
          </p>
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/home-availability-light.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="w-screen bg-main_accent pb-24">
        <div className="max-w-7xl mx-auto flex flex-col px-8 md:px-0 gap-4 md:gap-0 md:flex-row justify-between pt-24">
          <div className="bg-tile_cream rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">85+</h1>
            <p className="md:py-0 py-8 w-[280px]">
              meetings scheduled in the first month.
            </p>
          </div>
          <div className="bg-tile_blue rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">50</h1>
            <p className="md:py-0 py-8 w-[280px]">
              hours saved on back-and-forth emails.
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white">
              <Image
                src="/woman_two.jpg"
                alt="Hero Image"
                width={215}
                height={250}
              />
              <p className="w-[350px] h-[150px] ">
                &quot;This scheduling app transformed how I manage client
                bookings. It&apos;s simple, fast, and keeps me organized!&quot;
                -Sarah Thompson, Freelance Consultant
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pt-12 md:px-0 px-8 gap-4 md:gap-0">
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white ">
              <Image src="/man.jpg" alt="Hero Image" width={215} height={250} />
              <p className="w-[350px] h-[150px] ">
                &quot;Our team loves the automated reminders and seamless
                booking experience. It&apos;s a game-changer for our
                workflow.&quot; -Michael Rivera, Head of Client Success
              </p>
            </div>
          </div>
          <div className="bg-tile_purple rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">12</h1>
            <p className="md:py-0 py-8 w-[280px]">
              no-shows reduced in a single quarter.
            </p>
          </div>
          <div className="bg-tile_cream rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">30%</h1>
            <p className="md:py-0 py-8 w-[280px]">
              increase in client satisfaction scores.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto md:px-0 px-8 flex flex-col md:flex-row justify-between gap-4 md:gap-0 pt-12">
          <div className="bg-tile_blue rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">150+</h1>
            <p className="md:py-0 py-8 w-[280px]">
              appointments managed without a single double-booking.
            </p>
          </div>
          <div className="bg-tile_green rounded-xl flex flex-col justify-center gap-4 pl-6">
            <h1 className="md:py-0 py-8 text-3xl font-bold">20+</h1>
            <p className="md:py-0 py-8 w-[280px]">
              hours saved every week since adoption.
            </p>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white">
              <Image
                src="/woman_one.jpg"
                alt="Hero Image"
                width={215}
                height={250}
              />
              <p className="w-[350px] h-[150px] ">
                &quot;As a small business owner, this app helped me reclaim my
                time. Now I focus on delivering value, not juggling my
                schedule.&quot; -Jessica Patel, Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-main ">
        <div className="max-w-7xl mx-auto flex flex-col place-items-center gap-6 ">
          <p className=" text-2xl text-center md:w-[740px] pt-12">
            Ready to Take Control of Your Schedule? Start booking smarter today.
            No credit card required!
          </p>
          <Link
            className="mb-16 bg-accent rounded-full "
            href="https://google.com"
          >
            <div className=" px-10 py-6  flex items-center justify-center">
              <span className=" text-xl uppercase font-bold">
                Start For Free
              </span>
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
    </>
  );
}
