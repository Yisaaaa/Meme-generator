import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Meme from "./Meme";

function App() {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
