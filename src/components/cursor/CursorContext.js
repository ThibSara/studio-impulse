import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [variant, setVariant] = useState("default");

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);