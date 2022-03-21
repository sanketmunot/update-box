import React from "react";
import "./UpdateBox.css";
const UpdateBox = ({ _id, name, description, date }) => {
  const shorten = (desc) => {
    const SIZE = 100;
    return desc.length > SIZE ? desc.substr(0, SIZE) + ". . ." : desc;
  };

  const DATE = new Date(date);
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const getDate = () => {
    return DATE.getDate() < 10 ? "0" + DATE.getDate() : DATE.getDate();
  };
  const getMonth = () => {
    return MONTHS[DATE.getMonth()];
  };
  const getYear = () => {
    return DATE.getFullYear();
  };
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__heading">{name}</div>
        <div className="card__description">{shorten(description)}</div>
      </div>

      <div className="card__date">
        <div className="card__date__day">{getDate()}</div>
        <div className="card__date__month">{getMonth()}</div>
        <div className="card__date__year">{getYear()}</div>
      </div>
    </div>
  );
};

export default UpdateBox;
