import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../fonts/Valentine.woff'
import './style.css'
import img from '../images/img3.jpg';


function YesTwo() {
  const navigate = useNavigate(); 
  const noText = ["Yes.", "WHY NOOOT", "ITS A MISTAKE", "U WON'T DO THIS", "I'M GONNA CRY..", "PLEASSE..", "My heart is broken..."];
  const [noCount, setNoCount] = useState(0);
  const yesBtnSize = noCount * 20 + 20;
  
  const onYesClick = () => {
    navigate('/yesthree');
  }

  const onNoClick = () => {
    setNoCount(noCount + 1);

  }

  const getPhrase = () => {
    return noText[Math.min(noCount, noText.length - 1)]
  }

  return (
  <div>
    <span className='text'>I will never leave u until i die.<br></br>MY LOVE, MY LIFE.</span>
    <img className='img' src={img}/>
    <div>
      <span> Haven't u changed ur mind..?<br></br></span>
      <button style={{fontSize: yesBtnSize}}onClick={onYesClick} class="button-57 btn" role="button"><span class="text">NOOOOOO!!!!!!!!</span><span>Правильний вибір!!!</span></button>
      <button onClick={onNoClick} class="button-57 btn" role="button"><span class="text">{getPhrase()}</span><span>Не зрозумів!!!!!</span></button>

    </div>
  </div>
  );
}

export default YesTwo;