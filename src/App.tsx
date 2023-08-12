import { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import "./MyComponents/Title.css";
import Footer from "./MyComponents/Footer";
import symbol from "./assets/symbol.webp";
import logo2 from "./assets/logo2.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div className="symbol">
        <img src={symbol} alt="symbol of PEC" width={150} height={150}></img>
      </div>
      <div className="logo2">
        <img src={logo2} alt="logo2 of PEC" width={300} height={140}></img>
      </div>
      <div className="center-container">
        <h1> ALL ABOUT PEC</h1>
      </div>
      <br></br>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default App;
