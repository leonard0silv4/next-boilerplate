// src/components/Display.tsx
import React from "react";
import { useMyContext } from "../contexts/exampleContext";

const Display: React.FC = () => {
  const { text } = useMyContext();

  return <div>Texto do contexto: {text}</div>;
};

export default Display;
