import React from "react";
import Header from "../header/Header";
import Body from "../body/body";
import Footer from "../footer/Footer";


export default function Iniitial(){
    return(
        <div className="innitial">
               <Header pontos={0}></Header>
               <Body></Body>
               <Footer></Footer>
        </div>
    )
}