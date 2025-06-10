// src/pages/example.tsx
import React from "react";
import { MyProvider } from "../../contexts/exampleContext";
import Updater from "../../components/exampleUpdater";
import Display from "../../components/exampleDisplay";

const ExamplePage: React.FC = () => {
  return (
    <MyProvider>
      <h1>Exemplo de Contexto</h1>
      <Updater />
      <Display />
    </MyProvider>
  );
};

export default ExamplePage;
