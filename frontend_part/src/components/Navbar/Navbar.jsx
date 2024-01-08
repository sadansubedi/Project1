import React from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink,useNavigate } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from "../../images/logo.png"
import { getToken,removeToken } from "../../services/LocalStorageService";
import "./Navbar.css"
import { useDispatch } from "react-redux";
import { unsetUserToken } from "../../features/authSlice";

const Navbar = () => {
  const {access_token}= getToken();
  const navigate = useNavigate();
  // console.log(access_token);

  const dispatch = useDispatch();
  // const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const handleLogout = () => {
    dispatch(unsetUserToken({ access_token: null }));
    removeToken();
    // console.log('user logout');
    // navigate('/login');
  }
  return (
    <>
      <div className="text-2xl flex justify-between items-center  font-bold p-4 border-b-2 fixed w-full top-0 bg-black">
        <NavLink to={"/"}  >
          <span>
            <img src={logo} alt="" className="w-20 h-20 mr-7"/>
          </span>
        </NavLink>
        <NavLink to={"/"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"} hover:text-orange-700`
                                    }>
          <span >
            Home |
          </span>
        </NavLink>
        <NavLink to={"/csit"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span>
            BSC CSIT |
          </span>
        </NavLink>
        <NavLink to={"/bit"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"} hover:text-orange-700`
                                    }>
          <span >
            BIT |
          </span>
        </NavLink>
        <NavLink to={"/bca"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span >
            BCA |
          </span>
        </NavLink>
        <NavLink to={"/CE"} className={({isActive}) =>
                                        ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700`
                                    }>
          <span >
            Computer Engineering
          </span>
        </NavLink>
        <div className="navbarsearch">
            
            <input type="text" placeholder="search..." className="pl-3"/>
            <SearchOutlinedIcon className="text-base ml-3"/>
          </div>
         
          {access_token ? <NavLink to="/login" onClick={handleLogout} className={({isActive}) =>
                               ` ${isActive ?"text-red-700"  : "text-green-400"}  hover:text-orange-700 flex flex-col items-center text-xl `
                                    }
                            >Logout</NavLink>:
          <NavLink to="/register" className={({isActive}) =>
                               ` ${isActive ? "text-green-400" : "text-red-700"}  hover:text-orange-700 flex flex-col items-center text-xl `
                                    }
          ><AppRegistrationIcon/> Register/Login</NavLink>
           }
      </div>
     
    </>
  );
};

export default Navbar;