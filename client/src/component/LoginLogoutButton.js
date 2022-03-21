import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="font-semibold text-black-500 w-full rounded-lg bg-sky-500/[.2] hover:bg-sky-500/[.5] p-2"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

const LogoutButton = () => {
  const { logout, user } = useAuth0();
  console.log(user);
  return (
    <div className='flex align-center'>
      <button onClick={() => logout()}>Log Out </button>
      <img src={user.picture} className='h-7 ml-2 object-contain rounded'/>
    </div>
  );
};

export { LoginButton, LogoutButton };
