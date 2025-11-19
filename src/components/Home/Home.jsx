import { useEffect, useState } from 'react';
import ring from '../../ring.svg';
import star from '../../star.svg';

export default function Home(){
    const [fadeIn, setFadeIn] = useState(false);
    
  useEffect(() => {
    // Trigger fade-in after mount
    setFadeIn(true);
  }, []);

    return (
        <div className={`starcircle transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <img src={ring} alt="" className="logo-white App-logo ring" />
            <img src={star} alt="" className="logo-white App-logo star" />
        </div>
    );
  }