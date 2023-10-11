import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUserInfo from "./EditUserInfo";

export default function Header() {
  const userState = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };


  return (
    <div className="header">
      {editing ? (
        <EditUserInfo user={userState} onCancel={handleCancel} />
      ) : (
        <>
          <h1>
            Welcome Back <br /> {userState.firstName} {userState.userName}
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}
