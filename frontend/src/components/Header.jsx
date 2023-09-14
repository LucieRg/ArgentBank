import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUserInfo from "./EditUserInfo";

export default function Header() {
  const userState = useSelector((state) => state.user);
  const user = userState?.user;
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
        <EditUserInfo user={user} onCancel={handleCancel} />
      ) : (
        <>
          <h1>
            Welcome Back <br /> {user.firstName} {user.userName}
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}
