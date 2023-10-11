import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUsernNameAsync } from "../../redux/actions/userActions";

export default function EditUserInfo({ user, onCancel }) {
  const dispatch = useDispatch();
  const authToken = useSelector ((state)=> state.auth.token)
  const [formData, setFormData] = useState({
    userName: user?.userName || "", 
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données modifiées à l'API et mettez à jour l'utilisateur
    dispatch(putUsernNameAsync(formData, authToken));
    onCancel();
  };

  return (
    <div className="sign-in-content">
      <h2>Edit User Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input className="gray"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            readOnly // Empêche la modification
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input className="gray"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            readOnly // Empêche la modification
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="sign-in-button" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="sign-in-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
