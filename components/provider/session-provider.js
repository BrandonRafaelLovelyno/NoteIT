"use client";

import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateSession = (newSession) => {
    setSession(newSession);
  };

  const clearSession = () => {
    setSession(null);
  };

  const fetchUser = async () => {
    try {
      const backendUrl = getBackendUrl();

      const { data } = await axios.get(`${backendUrl}/auth/session`, {
        withCredentials: true,
      });

      setSession({ userId: data.id });
      setIsLoading(false);
    } catch (err) {
      console.log("Error fetching session: ", err);
    }
  };

  //   This function will call fetchUser function on website starting
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, updateSession, clearSession, isLoading }}
    >
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
