import React, { useState, createContext } from "react";

export const TContext = createContext();

export const TProvider = (props) => {
    const [token, setToken] = useState("");
    const [userdetails, setUserdetails] = useState("");

    return (
      <TContext.Provider value={[token, setToken,userdetails, setUserdetails]}>
        {props.children}
      </TContext.Provider>
    );
  };