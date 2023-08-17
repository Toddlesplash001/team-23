import { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import "./MyComponents/Title.css";
import Footer from "./MyComponents/Footer";
import symbol from "./assets/symbol8.jpg";
import logo2 from "./assets/logo2.jpg";
function App() {
  const [count, setCount] = useState(0);
  return (
    <><div className="symbol">
        <a href = "https://pec.ac.in">
        <img src={symbol} alt="symbol of PEC" width={235} height={90}></img>
        </a>
      </div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
export default App;
