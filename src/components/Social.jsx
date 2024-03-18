import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Social(){
    return (
      <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
       m: 1, minWidth: 500, maxWidth: 'sm'}}>
        <CardContent>
          social
        </CardContent>
      </Card>
    );
  }