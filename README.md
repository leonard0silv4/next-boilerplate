# Next.js Boilerplate com TypeScript, Jest, Axios e React Context

Este boilerplate foi criado para acelerar o desenvolvimento com Next.js usando TypeScript, testes unitários com Jest e React Testing Library, configuração centralizada de Axios e uma estrutura organizada. Também inclui exemplo de React Context para comunicação entre componentes.

---

## 📁 Estrutura do Projeto

```yaml
src

├── components/ # Componentes React reutilizáveis

├── contexts/ # React Contexts para estado global

├── hooks/ # Custom React hooks

├── lib/ # Configurações externas (ex: axios config)

├── pages/ # Páginas Next.js (rotas)

├── utils/ # Funções utilitárias gerais

├── styles/ # Arquivos CSS/SCSS globais ou específicos
```

---

## ⚙️ Como usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento projeto isolado

```bash
npm run dev
```

Acesse http://localhost:3000

### 3. Rodar testes unitários

```bash
npm test
```

### 3. Rodar o servidor de desenvolvimento projeto docker

produção

```bash
docker-compose up --build
```

desenvolvimento

```bash
docker-compose -f docker-compose.dev.yml up --build
```

Acesse http://localhost:3000

## 🧪 Testes Unitários

Os testes ficam próximos aos arquivos testados, com extensão .test.ts ou .test.tsx.

## 📦 Configuração Axios Exemplo

Arquivo: /src/lib/axios.ts

```js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
```

## 🔄 React Context - Comunicação entre componentes

Exemplo de um contexto para compartilhar e alterar um texto entre componentes.

```js
// src/contexts/MyContext.tsx
import React, { createContext, useState, ReactNode, useContext } from "react";

interface MyContextType {
  text: string;
  setText: (newText: string) => void;
}

const MyContext = (createContext < MyContextType) | (undefined > undefined);

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
  if (!context)
    throw new Error("useMyContext deve ser usado dentro de um MyProvider");
  return context;
}
```

### exemplo uso contexto components

```js
// src/components/Updater.tsx
import React from "react";
import { useMyContext } from "../contexts/MyContext";

const Updater: React.FC = () => {
  const { setText } = useMyContext();

  return (
    <button onClick={() => setText("Texto alterado pelo Updater!")}>
      Alterar Texto
    </button>
  );
};
export default Updater;
```

```js
// src/components/Display.tsx
import React from "react";
import { useMyContext } from "../contexts/MyContext";

const Display: React.FC = () => {
  const { text } = useMyContext();

  return <div>Texto do contexto: {text}</div>;
};

export default Display;
```

## Usando o Provider no topo da árvore (exemplo em página)

```js
// src/pages/example.tsx
import React from "react";
import { MyProvider } from "../contexts/MyContext";
import Updater from "../components/Updater";
import Display from "../components/Display";

const ExamplePage: React.FC = () => {
  return (
    <MyProvider>
      <h1>Exemplo React Context</h1>
      <Updater />
      <Display />
    </MyProvider>
  );
};

export default ExamplePage;
```

## 📑 Scripts no package.json

```js
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

## 📋 Exemplo de teste unitário para componente com React Testing Library

```js
// src/components/Updater.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyProvider } from "../contexts/MyContext";
import Updater from "./Updater";
import Display from "./Display";

describe("React Context integration", () => {
  it("updates text in Display when Updater button is clicked", () => {
    render(
      <MyProvider>
        <Updater />
        <Display />
      </MyProvider>
    );

    expect(screen.getByText(/Texto inicial/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Alterar Texto/i }));

    expect(
      screen.getByText(/Texto alterado pelo Updater!/i)
    ).toBeInTheDocument();
  });
});
```

## 📋 Sobre internacionalização

Os arquivos de mapeamento das internacionalizações ficam em
public/locales/en-US/common.json
public/locales/pt-BR/common.json

no src/pages/index.tsx tem exemplo de como internacionalizar conteúdos

as rotas ficam {meuEndereco} listam como default pt-BR e {meuEndereco}/en-US consome a internacionalização
