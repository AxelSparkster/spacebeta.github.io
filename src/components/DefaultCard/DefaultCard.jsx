import { Card, CardContent } from '@mui/material';
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
                <Card className="card default-layout">
                    <CardContent className="temp-card">
                        {props.children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }