import React from "react";
import "./App.css";
import TrackerView from "./View";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App-header">
        <div className="wrapper">
          <TrackerView />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;