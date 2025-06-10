// src/components/Updater.tsx
import React from "react";
import { useMyContext } from "../contexts/exampleContext";

const Updater: React.FC = () => {
  const { setText } = useMyContext();

  return (
    <button onClick={() => setText("Texto alterado pelo Updater!")}>
      Alterar Texto
    </button>
  );
};

export default Updater;
