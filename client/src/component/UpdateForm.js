import React, { useState } from "react";
import "./UpdateForm.css";
import { useDispatch } from "react-redux";
import { addRecentUpdate } from "../redux/actions/updatesActions";
// import axiosInstance from "../common/axiosInstance";
import { useAuth0 } from "@auth0/auth0-react";
import axiosInstance from "../common/axiosInstance";

const UpdateForm = () => {
  const { user } = useAuth0();
  const [updateName, setUpdateName] = useState("");
  const [updateDescription, setUpdateDescription] = useState(
    `Summary:\n\nDetails:\n\nLearnings:`
  );
  const [updateDate, setUpdateDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const dispatch = useDispatch();
  const submitForm = () => {
    axiosInstance
      .post("/updates/add", {
        email: user.email,
        updateName: updateName,
        updateDescription: updateDescription,
        updateDate: updateDate,
      })
      .then((response) => {
        dispatch(
          addRecentUpdate({
            _id: 8,
            updateName,
            updateDescription,
            updateDate,
          })
        );
        setUpdateName("");
        setUpdateDescription(`Summary:\n\nDetails:\n\nLearnings:`);
        setUpdateDate(new Date().toISOString().slice(0, 10));
      })
      .catch(() => {
        console.log("trigger error");
      });
  };
  return (
    <div className="form">
      <div className="form__element">
        <label>Name Your Update:</label>
        <input
          type="text"
          onChange={(e) => setUpdateName(e.target.value)}
          value={updateName}
          placeholder="Task name.."
        />
      </div>
      <div className="form__element">
        <label>Jot Down Your Status:</label>
        <textarea
          rows={8}
          onChange={(e) => setUpdateDescription(e.target.value)}
          value={updateDescription}
          placeholder={`Summary:\n\nDetails:\n\nLearnings:`}
        />
      </div>

      <div className="form__element">
        <label> Date:</label>
        <input
          type="date"
          onChange={(e) => setUpdateDate(e.target.value)}
          value={updateDate}
        />
      </div>

      <div className="form__element text-center">
        <button className="submit" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
