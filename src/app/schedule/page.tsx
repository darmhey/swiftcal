"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface User {
  googleId?: string;
  name: string;
  email: string;
  photo?: string;
  createdAt: Date;
}

// Define a type for the possible states of `user`
type UserState = User | { message: string };

import Image from "next/image";
export default function Page() {
  const [user, setUser] = useState<UserState | null>(null);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token); // Store JWT in localStorage
    }

    async function fetchCurrentUser() {
      const storedToken = localStorage.getItem("jwt");
      if (!storedToken) return setUser({ message: "Not logged in" });

      try {
        console.log("Fetching user with token:", storedToken); // Debug log
        const res = await fetch("http://127.0.0.1:3002/api/v1/users/me", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const data = await res.json();
        console.log("API Response:", data); // Debug log
        setUser(data as UserState); // Type the data as UserState
      } catch (error) {
        console.error("Fetch error:", error);
        setUser({ message: "Error fetching user" });
      }
    }
    fetchCurrentUser();
  }, [token]);
  // async function fetchCurrentUser() {
  //   const res = await fetch("http://127.0.0.1:3002/api/v1/users/me", {
  //     credentials: "include", // Ensures cookies are sent (including connect.sid)
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // }
  // fetchCurrentUser();
  return (
    <>
      <div className="w-full flex flex-col h-screen">
        <h1 className="text-xl font-semibold p-10 text-accent block ">
          {user ? (
            "message" in user ? (
              <p>{user.message}</p>
            ) : (
              <p>Welcome, {user.name || user.email}!</p> // Safe now due to type narrowing
            )
          ) : (
            <p>Loading...</p>
          )}
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
