import React from "react";
import { NavLink } from "react-router-dom";
// import Syllabus from "./Syllabus";
const Iits_navbar = () => {
  return (
    <div>
        <div className="flex justify-center flex-col  mt-32 mb-1 text-red-900 m-12 px-11 z-50">
        <div className=" text-left px-3 bg-black">
          <p className="text-3xl text-red-600 mb-3">
            Introduction to Technology
          </p>
          <p className="text-red-300 mb-2">
            This course introduces fundamental concepts of Information
            Technology and computer science.
          </p>
        </div>

        <div className="text-center bg-slate-500">
          <nav className="bg-light pt-2 pb-2">
            <div className="flex items-center">
              <NavLink
                to={"/csit/iit/syllabus"}
                className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                Syllabus
              </NavLink>
              <div className="flex space-x-12">
                {/* <NavLink
                  to={"/csit/iit/chapter"}
                  className=" font-bold hover:text-green-800 hover:underline" 
                >
                  {" "}
                  Chapter
                </NavLink> */}
                <NavLink
                  to="/csit/iit/lecture/"
                  className={  ({isActive}) =>
                  `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-3 hover:text-orange-800 hover:underline` }
                >
                  Lectures
                </NavLink>
                <NavLink
                  to="/csit/iit/notes"
                  className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                  Handwritten Notes
                </NavLink>
                <NavLink
                  to="/about"
                  className={  ({isActive}) =>
                `${isActive ? "text-green-800" : "text-red-800"} font-bold mx-12 hover:text-orange-800 hover:underline` }
              >
                  Chapter-wise Important Questions
                </NavLink>{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Iits_navbar