"use client";
import { useState } from "react";

export default function Page() {
  const [firstName, setFirstName] = useState("Damilola");
  const [lastName, setLastName] = useState("John");
  const [url, setUrl] = useState("swiftcal.com/johnasco19");
  //const [avatar, setAvatar] = useState(null);
  const [timeFormat, setTimeFormat] = useState("12-hour (2:00pm)");
  const [startOfWeek, setStartOfWeek] = useState("Sunday");
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  // const handleAvatarChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setAvatar(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div className=" p-6 ">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="text-gray-600 mb-4">Manage your personal profile.</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">My URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="w-20 h-20 rounded-full border flex items-center justify-center overflow-hidden">
          {/* {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Avatar</span>
          )} */}
          {<img src="/profile.svg" alt="Avatar" className=" object-cover" />}
        </div>
        <label className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
          Upload
          <input type="file" className="hidden" />
          {/* <input type="file" className="hidden" onChange={handleAvatarChange} /> */}
        </label>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Time Format</label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md"
          >
            <option>12-hour (2:00pm)</option>
            <option>24-hour (14:00)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Start of Week</label>
          <select
            value={startOfWeek}
            onChange={(e) => setStartOfWeek(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md"
          >
            <option>Sunday</option>
            <option>Monday</option>
          </select>
        </div>
      </div>

      {/* <div className="mt-4">
        <label className="block text-sm font-medium">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-1 w-full p-2 border rounded-md"
        >
          <option>Light Mode</option>
          <option>Dark Mode</option>
        </select>
      </div> */}

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="w-4 h-4 border rounded text-blue-600 focus:ring focus:ring-blue-300"
        />
        <label className="text-sm">
          I accept the{" "}
          <a href="#" className="text-blue-600 underline">
            terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            privacy notice
          </a>
        </label>
      </div>

      <button className="m-4 p-2 px-4 bg-accent text-white font-bold rounded-md hover:bg-blue-700">
        Save
      </button>
    </div>
  );
}
