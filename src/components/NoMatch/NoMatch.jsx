import { Link } from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch(){
    return (
      <div className="notfound">
        <div>
            <h2 className='lost-heading'>You seem lost.</h2>
            <p><a component={Link} to="/" href="/" className='lost-subheading'>Go to the home page.</a></p>
        </div>
      </div>
    );
  }