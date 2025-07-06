import React from 'react'
import style from './AboutMe.module.css'
import ReactCardFlip from 'react-card-flip';

export const AboutMe = () => {

  const [isFlipped, setIsFlipped] = React.useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`${style.aboutMe}`}>
   

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

        <div className={style.pointerIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <g filter="url(#filter0_d_103_850)">
              <path d="M10.6018 23.6686L4.67096 4.98088C4.41038 4.15978 5.24072 3.4154 6.02857 3.76383L23.4095 11.4505C24.2178 11.808 24.1989 12.9616 23.3792 13.2924L16.1854 16.1955C15.9463 16.292 15.7537 16.4771 15.6478 16.7123L12.4667 23.7767C12.09 24.6135 10.8794 24.5433 10.6018 23.6686Z" fill="#7367FF" />
              <path d="M4.19423 5.132C3.80351 3.90042 5.04919 2.78422 6.23092 3.30683L23.6114 10.9932C24.824 11.5295 24.7958 13.2596 23.5663 13.7558L16.3723 16.6588C16.2528 16.7071 16.1568 16.8001 16.1039 16.9176L12.9226 23.9821C12.3574 25.237 10.5422 25.1318 10.1256 23.8201L4.19423 5.132Z" stroke="white" stroke-linecap="square" />
            </g>
            <defs>
              <filter id="filter0_d_103_850" x="0.620117" y="0.67334" width="27.385" height="28.6929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_850" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_850" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className={style.pointerText}>
          <p>Hover over the image to uncover a little about me—just a small peek into my story!</p>
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
