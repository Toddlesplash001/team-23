import React from "react";
import "../MyComponents/Footer.css";
import insta from "../assets/Instagram-Icon.png";
const Footer = () => {
  return (
    <div className="footer">
       <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className = "sb__footer-links_request"> 
            <a href = "https://forms.gle/Kc9ZYJenozVompAv5">
            <h3>Didn't find your question. Ask here</h3>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <br></br>
            <h4>Know its makers:</h4> 
            <a href = "https://www.instagram.com/kuwarjainn/">
            <p><img src = {insta} alt = "" width = {15} height = {15}></img>  Kuwar Jain</p>
            </a>
            <a href = "https://www.instagram.com/tushar._sahni._/">
            <p><img src = {insta} alt = "" width = {15} height = {15}></img>  Tushar Sahni</p>
            </a>
            <a href = "https://www.instagram.com/devanshvashisht_/">
            <p><img src = {insta} alt = "" width = {15} height = {15}></img>  Devansh Vashisht</p>
            </a>
            </div>
       </div>
       <hr></hr>
       <div className = "sb__footer-below">
        <div className = "sb__footer-copyright">
          <p>
            @2023 All About PEC.All rights reserved.
          </p>
          </div>
          </div> 
      </div>
    </div>
  );
};
export default Footer;
