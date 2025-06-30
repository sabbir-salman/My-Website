import React from 'react'
import style from './AboutMe.module.css'
import ReactCardFlip from 'react-card-flip';

export const AboutMe = () => {

  const [isFlipped, setIsFlipped] = React.useState(false);
  
  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (


    <div className={`${style.aboutMe} `}>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className={style.theFront} onClick={flipCard}>Front of card</div>
        <div className={style.theBack} onClick={flipCard}>Back</div>
      </ReactCardFlip>

    </div>



  )
}

export default AboutMe
