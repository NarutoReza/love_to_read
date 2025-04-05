import React, { useState } from 'react';
import '../styles/styles.css';
import { Volume1 } from 'lucide-react';
import { RiMotorbikeFill  } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight, FaBicycle, FaVolumeMute, FaWalking } from "react-icons/fa";
import { FaVolumeHigh, FaVolumeLow } from "react-icons/fa6";
import Page1 from './Page1';
import Page2 from './Page2';

function Page() {
  const [page, setPage] = useState(1);

  return (
    <div className='container'>
      {
        page === 1
        ? <Page1 />
        : <Page2 />
      }

      <div className='next-page'>
        <FaArrowLeft className='page-arrow' onClick={() => {setPage(1)}} />
        <FaArrowRight className='page-arrow' onClick={() => {setPage(2)}} />
      </div>
    </div>
  )
};

export default Page;