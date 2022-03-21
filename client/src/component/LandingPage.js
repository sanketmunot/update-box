import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Spinner from "../common/Spinner";
import "./LandingPage.css";
import { LoginButton } from "./LoginLogoutButton";
const LandingPage = () => {
  const {isLoading} = useAuth0()
  
  return (
    <div className="text-center h-screen flex justify-center items-center 
    bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className='p-20 box-shadow
       bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300'>
        <h1 className='text-white text-3xl m-4 font-black'>Update Box</h1>
        <p className='font-mono m-4 font-medium'>Archive for your daily update's</p>
        <div className='mx-14'>
        <LoginButton />
        </div>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default LandingPage;
