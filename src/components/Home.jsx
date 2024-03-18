import ring from '../ring.svg';
import star from '../star.svg';

export default function Home(){
    return (
      <div class="starcircle">
        <img src={ring} className="App-logo ring" />
        <img src={star} className="App-logo star" />
      </div>
    );
  }