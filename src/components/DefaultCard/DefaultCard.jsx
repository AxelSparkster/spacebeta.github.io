import { useState, useEffect } from 'react';
import './DefaultCard.css';

export default function DefaultCard(props){
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div className={`default-layout transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            <div>
                <div className="rounded-lg shadow-md bg-white p-6 card default-layout">
                    <div className="temp-card">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
  }