import { Card, CardContent, useMediaQuery, useTheme} from '@mui/material';
import FadeIn from 'react-fade-in';

export default function About(){
    {/* TODO: make this into a component */}
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="default-layout">
            <div>
                {/* TODO: put CSS styles into a file */}
                <FadeIn>
                    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                    m: 1, minWidth: isMobile ? 350 : 500, maxWidth: isMobile ? '100%' : 'xl', minHeight: 300, maxHeight: 400}}>
                        <CardContent className="temp-card">
                            about
                        </CardContent>
                    </Card>
                </FadeIn>
            </div>
        </div>
    );
  }