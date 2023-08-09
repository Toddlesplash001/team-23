import { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import "./MyComponents/Title.css";
import Footer from "./MyComponents/Footer";
import "./assets/symbol.png";
import symbol from "./assets/symbol.png";
import logo2 from "./assets/logo2.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center-container">
        <a href="http://localhost:5173/#">
          <h1>ALL ABOUT PEC</h1>
        </a>
      </div>
      <img src={symbol} alt="symbol of PEC" width={100} height={100} ></img>
      <img src={logo2} alt="logo of PEC" width={200} height={100}></img>
      <Header />

      <Footer />
    </>
  );
}

export default App;
