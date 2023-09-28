import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";



export const getUserInfo = createAction("user/profile")
export const putUserName = createAction ("user/username")


export const getUserInfoAsync = () => {
  
  return async (dispatch, getState) => {
    try {
      const apiURL ="http://localhost:3001/api/v1/user/profile";
      // Effectue l'appel API pour la connexion
      const response = await Axios.post(apiURL,{}, {
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
      const user = response.data.body;
      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(putUserName(user));
    } catch (error) {
  }
  };
};



