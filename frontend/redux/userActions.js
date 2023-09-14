import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";


export const loginUserSuccess = createAction("user/loginSuccess");
export const loginUserFailure = createAction("user/loginFailure");
export const logoutUser = createAction("user/logout");
export const getUserInfo = createAction("user/profile")
export const putUserName = createAction ("user/username")

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
export const getUserInfoAsync = (userData) => {
  return async (dispatch) => {
    try {
      const apiURL ="http://localhost:3001/api/v1/user/profile";
      // Effectue l'appel API pour la connexion
      const response = await Axios.post(apiURL,userData, {
      headers : {
        Authorization : "Bearer " + localStorage.getItem("token")
      }
      });

      
      const user = response.data.body;
      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(getUserInfo(user));
      
    } catch (error) {
  }
  };
};
export const putUsernNameAsync = (userData) => {
  return async (dispatch) => {
    try {
      const apiURL ="http://localhost:3001/api/v1/user/profile";
      // Effectue l'appel API pour la connexion
      const response = await Axios.put(apiURL,userData, {
      headers : {
        Authorization : "Bearer " + localStorage.getItem("token")
      }
      });
      console.log("Request Data:", userData);
      console.log("API Response:", response.data);
      const user = response.data.body;
      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(putUserName(user));
    } catch (error) {
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