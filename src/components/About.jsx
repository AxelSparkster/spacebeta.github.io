import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function About(){
    return (
        <div className="default-layout">
            <div>
                {/* TODO: make this into a component */}
                {/* TODO: put CSS styles into a file */}
                <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                m: 1, minWidth: 400, maxWidth: 400, minHeight: 300, maxHeight: 400}}>
                    <CardContent className="temp-card">
                        about
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }