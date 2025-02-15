import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen flex items-center justify-center  bg-gray-100 ">
      <div className="flex flex-col items-center justify-center text-center py-20 ">
        <div>
          <img
            src="/assets/images/error.gif"
            alt=""
            className="max-w-full w-auto h-auto"
          />
        </div>
        <Link
          to="/"
          className="w-42 md:w-40 text-sm md:text-lg  mt-6 px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 text-center"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
