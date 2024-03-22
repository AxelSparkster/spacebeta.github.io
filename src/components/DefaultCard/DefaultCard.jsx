import { Card, CardContent } from '@mui/material';
import FadeIn from 'react-fade-in';
import './DefaultCard.css';

export default function DefaultCard(props){
    return (
        <div className="default-layout">
            <div>
                <FadeIn>
                    <Card className="card default-layout">
                        <CardContent className="temp-card">
                            {props.children}
                        </CardContent>
                    </Card>
                </FadeIn>
            </div>
        </div>
    );
  }