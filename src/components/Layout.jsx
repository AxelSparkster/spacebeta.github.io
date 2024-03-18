import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MediaQuery from 'react-responsive';
import SmallToolbar from './SmallToolbar';
import BigToolbar from './BigToolbar';
import {Outlet} from 'react-router-dom';

export default function Layout(){
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
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, flexBasis: 0 }}>
          <Box style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover"}} 
          sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'stretch',
          alignContent: 'center', justifyContent: 'center'}}>
            <Outlet/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}