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
      <img src={symbol} alt="symbol of PEC" width={100} height={100} ></img>
      <img src={logo2} alt="logo2 of PEC" width={200} height={100} ></img>

      <div className="center-container">
        <h1>ALL ABOUT PEC</h1>
      </div>

      <Header />
      <Footer />
    </>
  );
}

export default App;
