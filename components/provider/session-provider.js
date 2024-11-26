"use client";

import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const updateSession = (newSession) => {
    setSession(newSession);
  };

  const clearSession = () => {
    setSession(null);
  };

  const fetchUser = async () => {
    try {
      const backendUrl = getBackendUrl();

      // TODO GABRIEL: fetch user with session
      const { data } = await axios.get(`${backendUrl}/user`, {
        withCredentials: true,
      });
      console.log(data);

      setSession(data.user);
    } catch (err) {
      console.log("Error fetching session: ", err);
    }
  };

  //   This function will call fetchUser function on website starting
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SessionContext.Provider value={{ session, updateSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use the session context
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
