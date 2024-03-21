import {AppBar, Box, Toolbar, } from '@mui/material';
import { Container } from '@mui/system';
import MediaQuery from 'react-responsive';
import SmallToolbar from './SmallToolbar';
import BigToolbar from './BigToolbar';
import {Outlet} from 'react-router-dom';

export default function Layout(){
  localStorage.setItem('visited', 1); // Note: This makes the initial fade-in happen only once.
  return(
    <div id="Layout">
      <Box sx={{ height: "100vh", display: 'flex', flexDirection: 'column'}}>
        <AppBar>
          <MediaQuery minWidth={1224}>
            <BigToolbar/>
          </MediaQuery>
          <MediaQuery maxWidth={1223}>
            <SmallToolbar/>
          </MediaQuery>
        </AppBar>
        <Toolbar />
        <Box style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover"}}
         sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
          <Container sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
            <Outlet/>
          </Container>
        </Box>
      </Box>
    </div>
  );
}