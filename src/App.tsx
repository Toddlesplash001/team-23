import { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import "./MyComponents/Title.css";
import Footer from "./MyComponents/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center-container">
        <h1>ALL ABOUT PEC</h1>
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default App;
