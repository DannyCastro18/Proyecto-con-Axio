import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUsersClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      navigate("/Users");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/LoginExample");
  };

  return (
    <>
      <nav className=" shadow-md w-full fixed top-0 left-0 z-50 justify-between ">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4 ">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/12263/12263132.png"
              className="h-14"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Min-ki Shop
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="relative px-4 py-2 font-semibold text-white bg-violet-500 rounded-lg shadow-md group   hover:bg-violet-700 "
                >
                  <span className="absolute inset-0 w-full h-full  transform scale-0 bg-violet-700 rounded-lg group-hover:scale-100"></span>
                  <span className="relative z-10">
                  Log Out
                  </span>
                </button>

                <button
                  onClick={handleUsersClick}
                  className="relative px-4 py-2 font-semibold text-white bg-pink-500 rounded-lg shadow-md group   hover:bg-pink-700 "
                >
                  <span className="absolute inset-0 w-full h-full  transform scale-0 bg-pink-700 rounded-lg group-hover:scale-100"></span>
                  <span className="relative z-10">
                  View Users
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </nav>
      {isAuthenticated && (
        <div className="flex items-center justify-center self-center mt-4 ">

          <br />
          <h2 className="font-semibold text-xl text-white">Welcome, you can see the users now.</h2>
        </div>
      )}
    </>
  );
}
