import {createContext, useContext, useState} from 'react'
import axios from "axios";
import {POST_LOGIN} from "../constants";

export const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext);
}

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const login = async ({email, password}) => {
      await axios.post(POST_LOGIN, {
        email,
        password
      })
    setUser(email)
  }

  return {
    user,
    login,
  };
}