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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
  return (
    <Box style={{ height: "100vh" }} sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar position="sticky">
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Social</Button>

          <Box sx={{ flexGrow: 1 }}/>

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
      </AppBar>
      <Toolbar/>
      <Box style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover",
      height: "100vh"}} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default App;
