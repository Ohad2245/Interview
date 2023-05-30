import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth } from './firebase';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  
  return (
    <Crypto.Provider
      value={{
        alert,
        setAlert,
        user,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};