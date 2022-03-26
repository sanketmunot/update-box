import React, { useEffect } from "react";
import "./RecentUpdates.css";
import UpdateBox from "./UpdateBox";
import { useDispatch, useSelector } from "react-redux";
import { setRecentUpdates } from "../redux/actions/updatesActions";
import axiosInstance from "../common/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";


const RecentUpdates = () => {
  const dispatch = useDispatch()
  const {user} = useAuth0()
  const updates = useSelector((state)=>state.recentUpdates)


  useEffect(() =>{
    axiosInstance.get('/updates/recentUpdates',{headers:{email: user.email}})
    .then(result => dispatch(setRecentUpdates(result.data)))
  },[])


  return (
    <div className="updates">
        {updates.map(({_id,updateName,updateDescription,updateDate})=>{
            return (
                <UpdateBox 
                key={_id}
                _id={_id}
                name={updateName}
                description={updateDescription}
                date={updateDate}
                />
            )
        })}
      
    </div>
  );
};

export default RecentUpdates;
