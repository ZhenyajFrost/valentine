import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../fonts/Valentine.woff'
import './style.css'

function Home() {
  const navigate = useNavigate(); 
  const noText = ["No.", "WHY NOOOT", "ITS A MISTAKE", "U WON'T DO THIS", "I'M GONNA CRY..", "PLEASSE..", "My heart is broken..."];
  const [noCount, setNoCount] = useState(0);
  const yesBtnSize = noCount * 20 + 20;
  
  const onYesClick = () => {
    navigate('/yesone');
  }
  const onNoClick = () => {
    setNoCount(noCount + 1);

  }

  const getPhrase = () => {
    return noText[Math.min(noCount, noText.length - 1)]
  }

  return (
  <div>
    <p className='text'> Would U be my Valentine???</p>
    <img className='img'src='https://play-lh.googleusercontent.com/L6qehUCLcgG7W3cH1aBel04XKSp5GA9oX3NrUWgwaIwkiYWnhF-xJftIQz5m5Uy-0K67'/>
    <div>
      <button style={{fontSize: yesBtnSize}}onClick={onYesClick} class="button-57 btn" role="button"><span class="text">YEEESSS!!!!</span><span>Правильний вибір!!!</span></button>
      <button onClick={onNoClick} class="button-57 btn" role="button"><span class="text">{getPhrase()}</span><span>Не зрозумів!!!!!</span></button>

    </div>
  </div>
  );
}

export default Home;
