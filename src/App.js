import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BrowserRouter as Router, Link, Routes, Route, Outlet} from 'react-router-dom';
import packageJson from '../package.json' // TODO: hide later somehow
import ring from './ring.svg';
import star from './star.svg';
import MediaQuery from 'react-responsive';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="social" element={<Social/>}/>

        <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function Layout(){
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

function SmallToolbar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => 
  { 
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <Toolbar>
      <IconButton
        color="inherit"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-label="menu"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: {width: '250px'}}}> {/* TODO: use non-deprecated property */}
        <MenuItem component={Link} to="/">
          <ListItemText>Home</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/about">
          <ListItemText>About</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/social">
          <ListItemText>Social</ListItemText>
        </MenuItem>

        <MenuItem
          linkButton={true}
          href="https://blog.shootinginto.space/"
          target="_blank"
          component="a"
          onClick={handleClose}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </MenuItem>
        <MenuItem
          linkButton={true}
          href="https://twitter.com/AxelSparkster"
          target="_blank"
          component="a"
          onClick={handleClose}>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </MenuItem>
        <MenuItem
          linkButton={true}
          href="https://github.com/AxelSparkster"
          target="_blank"
          component="a"
          onClick={handleClose}>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>GitHub</ListItemText>
        </MenuItem>
        <MenuItem
          linkButton={true}
          href="https://trello.com/b/CtYfAAPA/shootingintospace"
          target="_blank"
          component="a"
          onClick={handleClose}>
          <ListItemIcon>
            <ViewKanbanIcon />
          </ListItemIcon>
          <ListItemText>Trello</ListItemText>
        </MenuItem>
        <Box sx={{ pl: 1, pr: 1 }}>
          <Typography variant="subtitle2" align="right">Version: {packageJson.version}</Typography>
        </Box> 
      </Menu>
    </Toolbar>
  )
}

function BigToolbar(){
  return (
    <Toolbar position="fixed">
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button component={Link} to="/about" color="inherit">About</Button>
      <Button component={Link} to="/social" color="inherit">Social</Button>

      <Box sx={{ flexGrow: 1 }} />
      <div sx={{ marginRight: 1 }}>Version: {packageJson.version}</div> 
      <IconButton href="https://blog.shootinginto.space/" color="inherit" aria-label="menu">
        <BookIcon />
      </IconButton>
      <IconButton href="https://twitter.com/AxelSparkster" color="inherit" aria-label="menu">
        <TwitterIcon />
      </IconButton>
      <IconButton href="https://github.com/AxelSparkster" color="inherit" aria-label="menu">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://trello.com/b/CtYfAAPA/shootingintospace" color="inherit" aria-label="menu">
        <ViewKanbanIcon />
      </IconButton>
    </Toolbar>
  );
}

function Home(){
  return (
    <div class="starcircle">
      <img src={ring} className="App-logo ring" />
      <img src={star} className="App-logo star" />
    </div>
  );
}

function About(){
  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
     m: 1, minWidth: 500, maxWidth: 'sm'}}>
      <CardContent>
        about
      </CardContent>
    </Card>
  );
}
function Social(){
  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
     m: 1, minWidth: 500, maxWidth: 'sm'}}>
      <CardContent>
        social
      </CardContent>
    </Card>
  );
}
function NoMatch(){
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}