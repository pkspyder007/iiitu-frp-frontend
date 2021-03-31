import axios from 'axios';
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
    loggedIn: false,
    role: "user"
  };
  const authContext = createContext(initialState);
  const { Provider } = authContext;
  
  const AuthProvider = ({ children }) => {
    useEffect(() => {
      axios.get("/users/autoLogin")
        .then(res => {
          dispatch({type:"LOG_IN"});
          dispatch({type:"SET_ROLE", payload: res.data.role});
        }).catch(e => {
          dispatch({type:"LOG_OUT"});
          dispatch({type:"SET_ROLE", payload: ""});
        })
      return () => {
        // 
      }
    }, [])

    const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case "LOG_IN":
          return { ...state, loggedIn: true };
        case "LOG_OUT":
          return { ...state, loggedIn: false };
        case "SET_ROLE":
            return { ...state, role: action.payload };
        default:
          return state;
      }
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  
  export { authContext, AuthProvider };