import React, { useEffect } from "react";
import { createStars } from "./utils";
import "../styles/home.css"; // Still used for animation
import { Link } from "react-router-dom";
const UserDetails = () => {
  const user = {
    name: "AKL HOME",
    email: "info@aklhome.com",
    phone: "+201558820103",
    address: "New Cairo , Egypt",
    profilePicture:
      "/assets/images/logo.jpeg",
  };

  useEffect(() => {
    createStars();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden w-full">
      <div className=" w-[80%] md:w-[40%]  p-6 bg-white rounded-lg shadow-lg z-10 mt-28 ">
        <div className="flex  items-center mb-6">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4"
          />
          <div className="flex !text-start !items-start flex-col gap-2">
            <h1 className="md:text-3xl text-sm !text-start  font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </h1>

            <p className="text-gray-600 text-start justify-start md:text-lg text-sm">
              {user.email}
            </p>
            <a
              href="https://wh.ms/201558820103"
              target="_blank"
              className="text-gray-600 text-start justify-start md:text-lg text-sm"
            >
              {user.phone}
            </a>
          </div>
        </div>
        <h2 className="md:text-2xl text-sm  font-semibold text-gray-800 mb-4">
          Address
        </h2>
        <p className="text-gray-600">{user.address}</p>
      </div>
      <Link
        to={"/"}
        className="w-42 !md:w-40 flex    text-sm md:text-lg mt-6 px-4 py-2  bg-black hover:bg-white hover:text-black  text-white rounded  transition duration-300 text-center"

      >
        Back Home Page
      </Link>
      <div className="magic-stars"></div>
    </div>
  );
};

export default UserDetails;
