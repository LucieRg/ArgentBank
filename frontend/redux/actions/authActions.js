import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";



export const loginUserSuccess = createAction("user/loginSuccess");
export const loginUserFailure = createAction("user/loginFailure");
export const logoutUser = createAction("user/logout");


// Action asynchrone pour la connexion de l'utilisateur
export const loginUserAsync = (userData) => {
    return async (dispatch) => {
      try {
        const apiURL ="http://localhost:3001/api/v1/user/login";
        // Effectue l'appel API pour la connexion
        const response = await Axios.post(apiURL,userData);
        const user = response.data;
        localStorage.setItem("token", response.data.body.token);
        // Dispatch une action de réussite avec les données de l'utilisateur connecté
        dispatch(loginUserSuccess(user));
        
        //dispatch(getUserInfoAsync())
      } catch (error) {
        // En cas d'erreur, dispatch une action d'échec avec le message d'erreur
        dispatch(loginUserFailure(error.message));
      }
    };
  };

  export const logoutUserAsync = () => {
    return async (dispatch) => {
      // Supprimez le token du localStorage lors de la déconnexion
      localStorage.removeItem("token");
  
      dispatch(logoutUser());
    };
  };