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
        <Link to="/" className="text-green-800 no-underline text-lg border border-green-800 rounded-md p-2 bg-green-100 hover:bg-green-200 transition mt-5">
          {t("notfound.back-home-error")}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
