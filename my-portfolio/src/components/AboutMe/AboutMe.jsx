import React from 'react'
import style from './AboutMe.module.css'
import ReactCardFlip from 'react-card-flip';

export const AboutMe = () => {

  const [isFlipped, setIsFlipped] = React.useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={style.aboutMe}>
      <div className={style.aboutMeContainer}>
        <div className={style.flipCard}>
          <div className={style.flipCardInner}>
            {/* Front */}
            <div className={style.flipCardFront}>
              <img
                src="/images/my image.jpg"
                alt="Sabbir Ahmed Salman"
                className={style.profileImage}
              />
            </div>

            {/* Back */}
            <div className={style.flipCardBack}>
              <h2>Sabbir Ahmed Salman</h2>
              <p>UX/UI Designer based in Bangladesh 🇧🇩</p>
              <a
                href="https://www.facebook.com/your.fb.username"
                target="_blank"
                rel="noopener noreferrer"
                className={style.fbButton}
              >
                Visit Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    // <div className={`${style.aboutMe} `}>
    //   {/* <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    //     <div className={style.theFront} onClick={flipCard}>Front of card</div>
    //     <div className={style.theBack} onClick={flipCard}>Back</div>
    //   </ReactCardFlip> */}

    //   <div className={style.aboutMeContainer}>
    //     <div className={style.flipCard}>
    //       <div className={style.front}></div>
    //       <div className={style.back}>
    //         <h1>This is back</h1>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    //       </div>
    //     </div>
    //   </div>


    // </div>



  )
}

export default AboutMe
