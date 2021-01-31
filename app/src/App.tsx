import React from "react";
import "./App.css";

import { WSContextProvider } from "./contexts/WSContextProvider";
import { Vote } from "./pages/Vote";

function App() {
  return (
    <WSContextProvider>
      <Vote />
    </WSContextProvider>
  );
}

export default App;
