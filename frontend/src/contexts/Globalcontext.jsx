import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const authContext=createContext()

export const authProvider=({children})=>{
    const [user, setuser] = useState(null)

    useEffect(() => {
    async function check() {
      try {
        const result = await axios.post(
          "http://localhost:5555/api/auth/user/checksignin",
          {},
          { withCredentials: true }
        );
        if (result.data?.result) {
          setuser(result.data.user);
        } else {
          setuser(null);
        }
      } catch (error) {
        console.log("Error checking user:", error);
      }
    }
    check();
  }, []);

  return (
    <authContext.Provider value={{user}}>
        {children}

    </authContext.Provider>
  )



}