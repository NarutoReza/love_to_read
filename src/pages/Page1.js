import React, { useState } from 'react';
import '../styles/styles.css';
import { Volume1 } from 'lucide-react';
import { RiMotorbikeFill  } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight, FaBicycle, FaVolumeMute, FaWalking } from "react-icons/fa";
import { FaVolumeHigh, FaVolumeLow } from "react-icons/fa6";

function Page1() {
  const [speed, setSpeed] = useState(1);

  const [singleWordsList, setSingleWordsList] = useState([
    {name: 'Spend', audioFile: '/audio/Spend.wav'},
    {name: 'Spent', audioFile: '/audio/Spent.wav'},
    {name: 'Spell', audioFile: '/audio/Spell.wav'},
    {name: 'Spill', audioFile: '/audio/Spill.wav'},
    {name: 'Spin', audioFile: '/audio/Spin.wav'},
    {name: 'Splash', audioFile: '/audio/Splash.wav'},
    {name: 'Split', audioFile: '/audio/Split.wav'},
    {name: 'Spring', audioFile: '/audio/Spring.wav'},
    {name: 'Spot', audioFile: '/audio/Spot.wav'},
    {name: 'Spun', audioFile: '/audio/Spun.wav'},
  ]);

  const [longWord, setLongWord] = useState([
    {speed: 1, audioFile: '/audio/Speed11.wav'},
    {speed: 2, audioFile: '/audio/Speed12.wav'},
    {speed: 3, audioFile: '/audio/Speed13.wav'},
  ]);

  const playSound = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  const playSound2 = () => {
    const audioObject = longWord.find((item) => item.speed === speed);
    if(audioObject) {
      const audio = new Audio(audioObject.audioFile);
      audio.play();
    }
  };

  return (
    <>
      <div className='page-box'>
        <div className='page' style={{backgroundImage: `url('${process.env.REACT_APP_BASE_URL}images/backgound.png')`}}>
          <h6>Word Family - /<span style={{color: 'black'}}>sp</span>/ words</h6>
          <div className='single-words-box'>
            <div className='single-words-images'>
              <img src='/images/9776768.png' />
              <img src='/images/woman.png' />
              <img src='/images/water-splash.png' />
            </div>
            <div className='single-words-audio'>
              {
                singleWordsList && singleWordsList.map((word, index) => (
                  <div className='single-word' key={index}>
                    <FaVolumeHigh className='single-word-icon' onClick={() => playSound(word.audioFile)} />
                    <div className='single-word-text'>
                      <span style={{color: '#314F99'}}>{word.name.slice(0, 2)}</span>
                      <span>{word.name.slice(2)}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='page' style={{backgroundImage: `url('${process.env.REACT_APP_BASE_URL}images/backgound.png')`}}>
          <h6><span style={{color: 'red'}}>Sp</span>ot is my pet dog.</h6>
          <img src='/images/boy.png' className='boy-dog' />
        </div>
      </div>
      <div className='speed-box'>
        <div className='volume-box'>
          <FaVolumeLow className='volume-icon green' onClick={() => {playSound2()}} />
        </div>
        
        <div className='sound-level'>
          <RiMotorbikeFill className={speed === 3 ? 'icon-custom-active' : 'icon-custom'} onClick={() => setSpeed(3)} />
          <div className='separator'></div>
          <FaBicycle className={speed === 2 ? 'icon-custom-active' : 'icon-custom'} onClick={() => setSpeed(2)} />
          <div className='separator'></div>
          <FaWalking className={speed === 1 ? 'icon-custom-active' : 'icon-custom'} onClick={() => setSpeed(1)} />
        </div>
      </div>
    </>
  )
};

export default Page1;