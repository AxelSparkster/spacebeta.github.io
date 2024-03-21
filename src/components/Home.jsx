import FadeIn from 'react-fade-in';
import ring from '../ring.svg';
import star from '../star.svg';

export default function Home(){
    return (
        <FadeIn className="default-layout">
            <div className="starcircle">
                <img src={ring} alt="" className="logo-white App-logo ring" />
                <img src={star} alt="" className="logo-white App-logo star" />
            </div>
        </FadeIn>
    );
  }