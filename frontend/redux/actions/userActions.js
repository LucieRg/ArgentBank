import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";



export const getUserInfo = createAction("user/profile")
export const putUserName = createAction ("user/username")

let authToken = null;

export const getUserInfoAsync = (authToken) => {
  console.log(authToken);

  return async (dispatch) => {
    try {
      const apiURL ="http://localhost:3001/api/v1/user/profile";
      // Effectue l'appel API pour la connexion
      const response = await Axios.post(apiURL,{}, {
      headers : {
        Authorization: `Bearer ${authToken}`      }
      });

      
      const user = response.data.body;
      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(getUserInfo(user));
      
    } catch (error) {
  }
  };
};
export const putUsernNameAsync = (userData,authToken) => {
  return async (dispatch) => {
    try {
      const apiURL ="http://localhost:3001/api/v1/user/profile";
      // Effectue l'appel API pour la connexion
      const response = await Axios.put(apiURL,userData, {
      headers : {
        Authorization: `Bearer ${authToken}`      }
      });
      const user = response.data.body;
      authToken = user.token;

      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(putUserName(user));
    } catch (error) {
  }
  };
};



