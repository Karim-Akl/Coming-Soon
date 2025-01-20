import React, { useEffect } from "react";
import { createStars } from "./utils";
import "../styles/home.css"; // Still used for animation
import { Link } from "react-router-dom";
const UserDetails = () => {
  const user = {
    name: "Dr Alaa Eksaharty PS Clinic",
    email: "Alla@alasaharty@yahoo.com",
    phone: "+201005550808",
    address: "Alexander, Egypt",
    profilePicture:
      "/assets/images/350526875_601246708738867_5009151418696316721_n.jpg",
  };

  useEffect(() => {
    createStars();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden w-full">
      <div className="xl:w-[40%] sm:w-[95%]  p-6 bg-white rounded-lg shadow-lg z-10 mt-28 ">
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Address</h2>
        <p className="text-gray-600">{user.address}</p>
      </div>
      <Link
        to={"/"}
        className="w-40 sm:w-26 mt-6 px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 text-center"
      >
        Back Home Page
      </Link>
      <div className="magic-stars"></div>
    </div>
  );
};

export default UserDetails;
