import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
 const navigate = useNavigate();
  // Accédez à la propriété "user" et "error" depuis le state "user"
  const userState = useSelector((state) => state.user);
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
  const {error } = userState;



  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Déclenche l'action asynchrone pour la connexion avec les données du formulaire
    dispatch(loginUserAsync(formData))
  }; 
  useEffect(() => {
    // Utilisez un effet pour déclencher la redirection après la connexion réussie
    if (isAuthenticated) {
      navigate("/user");
    
    }
    
  }, [ isAuthenticated]);


  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password"> Password</label>
          <input
            type="password" // Change le type à "password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>

      {/* Affichez les messages de connexion en fonction de l'état */}
     
      {error && <p>Error: {error}</p>}
      
    </section>
  );
}
