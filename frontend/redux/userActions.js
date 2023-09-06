import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const loginUserSuccess = createAction("user/loginSuccess");
export const loginUserFailure = createAction("user/loginFailure");

// Action asynchrone pour la connexion de l'utilisateur
export const loginUserAsync = (userData) => {
  return async (dispatch) => {
    try {
      // Effectue l'appel API pour la connexion
      const response = await Axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );

      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      // En cas d'erreur, dispatch une action d'échec avec le message d'erreur
      dispatch(loginUserFailure(error.message));
    }
  };
};
