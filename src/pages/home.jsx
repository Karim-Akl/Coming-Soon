import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./loading-page"; // Ensure the correct path
import "../styles/home.css"; // Still used for animation
import { createStars } from "./utils"; // تأكد من المسار الصحيح

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      createStars(); // تأكد من استدعاء createStars بعد انتهاء التحميل
    }
  }, [loading]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-#2c3e50 to-#fd746c overflow-hidden w-full">
      <div className="magic-stars"></div>
      <header className="min-h-screen flex flex-col items-center justify-center text-white relative">
        <img
          src="/assets/images/2519813_9c13a.gif"
          className="App-logo h-40 pointer-events-none"
          alt="logo"
        />
        <p className="text-4xl">Coming Soon</p>
        <p className="text-lg">
          Thank you for visiting.Website Under Construction
        </p>
        {/* <Link className="text-blue-400" to="/user/:id">
          Auther Details
        </Link> */}
        <div className="flex gap-4">
          <Link
            to="/user/:id"
            className="w-40 sm:w-26 mt-6 px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 text-center"
            // onClick={() => navigate("/404")}
          >
            Authors Details
          </Link>
          <a
            href="https://wh.ms/201005550808"
            className="w-40 sm:w-26 mt-6 px-2 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 text-center"
            target="_blank"
            // onClick={() => navigate("/error-page")}
          >
            Contact WhatsApp
          </a>
        </div>
      </header>
      {/* CSS Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: linear-gradient(135deg, #2c3e50, #fd746c);
          font-family: "Poppins", sans-serif;
        }
        h1 {
          font-size: 4rem;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: white;
          background: none;
          animation: glow 2s infinite ease-in-out;
        }
        p {
          font-size: 2.5rem;
          margin-bottom: 40px;
          opacity: 0.9;
          color: #fefefe;
        }
        .star {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          animation: sparkle 2s infinite ease-in-out;
        }
        @keyframes sparkle {
          0% {
            transform: translateY(-100px) scale(0);
          }
          50% {
            transform: translateY(0) scale(1.5);
          }
          100% {
            transform: translateY(100px) scale(0);
          }
        }
        @keyframes glow {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
