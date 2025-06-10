import React, { createContext, useState, ReactNode, useContext } from "react";

interface MyContextType {
  text: string;
  setText: (newText: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState("Texto inicial");

  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext deve ser usado dentro de um MyProvider");
  }
  return context;
}
