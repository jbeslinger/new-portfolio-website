import React from "react";
import Introduction from "./views/Introduction";
import About from "./views/About";
import Skills from "./views/Skills";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact"

function App() {
  return (
    <div className="container bg-scrolling">
      <Introduction /><hr />
      <About /><hr />
      <Skills /><hr />
      <Portfolio /><hr />
      <Contact />
    </div>
  );
}

export default App;