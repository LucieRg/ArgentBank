import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync} from "../../redux/userActions";
import { NavLink, useNavigate } from "react-router-dom"; 
import Logo from "../../public/img/argentBankLogo.png";

const Nav = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const user = userState?.user
  const navigate = useNavigate(); 



  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Déclenchez l'action Redux pour déconnecter l'utilisateur
    dispatch(logoutUserAsync());

    // Redirigez l'utilisateur vers la page d'accueil (Home)
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Logo Argent Bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {userState.isAuthenticated ? (
          <div  className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span className="user-info">{user.firstName}</span>
            <div className="main-nav-item-underline">
           <a onClick={handleLogout}>
           <i className="fa fa-sign-out"></i> Sign Out </a>
           </div>
           </div>
            
      
        ) : (
          <NavLink className="main-nav-item-underline" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
