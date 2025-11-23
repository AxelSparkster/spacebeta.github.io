import { AppBar, Box, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import NewToolbar from './Toolbar/NewToolbar';

export default function Layout(){
  localStorage.setItem('visited', 1); // Note: This makes the initial fade-in happen only once.
  return(
    <div id="Layout">
      <Box sx={{ height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <NewToolbar/>
        <Box style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover"}}
         sx={{ pt: '56px', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
          <Container sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
            <Outlet/>
          </Container>
        </Box>
      </Box>
    </div>
  );
}