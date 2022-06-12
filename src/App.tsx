import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Pages/Main";

function App() {
  return (
    <body>
      <header>
        <h1>TODOリスト</h1>
      </header>
      <main>
        <Main />
      </main>
    </body>
  );
}

export default App;
