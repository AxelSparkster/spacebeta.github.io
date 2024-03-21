import { Link } from 'react-router-dom';
export default function NoMatch(){
    return (
      <div className="notfound">
        <div>
            {/* TODO: put CSS styles into a file */}
            <h2 style={{fontSize: 60, color:"white", marginBlockEnd: 0, textShadow: "0px 0px 10px black"}}>You seem lost.</h2>
            <p><a component={Link} to="/" href="/" style={{fontSize: 30, color:"white", textShadow: "0px 0px 10px black"}}>Go to the home page.</a></p>
        </div>
      </div>
    );
  }