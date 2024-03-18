import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function About(){
    return (
      <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
       m: 1, minWidth: 500, maxWidth: 'sm'}}>
        <CardContent>
          about
        </CardContent>
      </Card>
    );
  }