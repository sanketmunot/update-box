import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Provider } from "react-redux";
import updatesStore from "../redux/store";
import "./Homepage.css";
import RecentUpdates from "./RecentUpdates";
import UpdateForm from "./UpdateForm";
import axiosInstance from "../common/axiosInstance";

const HomePage = () => {
  const { user } = useAuth0();
  console.log(user);

  axiosInstance.put("users/checkAdd", {
    email: user.email,
    name: user.name,
  });

  return (
    <>
      <Provider store={updatesStore}>
        <div className="Container md:flex justify-evenly">
          <div className="main md:w-1/3">
            <UpdateForm />
          </div>
          <div className="main md:w-1/2">
            <RecentUpdates />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default HomePage;
