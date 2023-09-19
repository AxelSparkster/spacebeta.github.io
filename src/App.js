import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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
    </Box>
  );
}

export default App;
