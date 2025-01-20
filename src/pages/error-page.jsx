import React from "react";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();

  const handleReload = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-red-100  m-auto">
        <div className="text-center bg-white rounded-lg shadow-md p-8 max-w-md sm:max-w-[75%] mx-auto ml-2 mr-2">
          <h1 className="text-6xl mb-4 text-red-700">OOPS!</h1>
          <p className="text-lg mb-6 text-gray-700">
            {t("notfound.Error Page-1")}
          </p>
          <a
            href="/"
            onClick={handleReload}
            className="text-green-800 no-underline text-lg border border-green-800 rounded-md p-2 bg-green-100 hover:bg-green-200 transition"
          >
            {t("notfound.back-home-error")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
