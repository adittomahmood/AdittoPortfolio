import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // This navigates to the homepage. Adjust the path if your homepage route is different.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-white">Whoops!</h1>
        <p className="text-2xl text-white mt-4">
          Looks like the page you're looking for is lost in galaxy.
        </p>
        <p className="text-lg text-white mt-6">
          No worries, let's get you back on track.
        </p>
        <button
          className="btn btn-error py-2 px-4 mt-8"
          onClick={handleHomeClick}
        >
          Take me home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
