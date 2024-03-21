import ring from '../ring.svg';
import star from '../star.svg';

export default function Loading(){
    return (
        <div class="loader">
            <div class="black starcircle">
                <img src={ring} className="App-logo ring" />
                <img src={star} className="App-logo star" />
            </div>
        </div>
    );
  }