import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../fonts/Valentine.woff'
import './style.css'
import img from '../images/img2.jpg';


function YesThree() {

  return (
  <div>
    <img className='img' src={img}/>
    <p style={{fontSize: "15px", lineHeight: "1em"}}>Moja luba kutsa vybach shcho tekst latyneceyu prosto shryft garniy) </p>
    <p style={{fontSize: "15px", lineHeight: "1em"}}>{"Kovhayu tebe najbilshe v ciomu zhuti. Ty nazavzhdy moja yedyna malenka divchynka. Nikoly tebe ne zalyshu i zavzhdy bubu poruch. CIOOOOM<З"}</p>
  </div>
  );
}

export default YesThree;