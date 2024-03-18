import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import packageJson from '../../package.json' // TODO: hide later somehow

export default function BigToolbar(){
    return (
      <Toolbar position="fixed">
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/social" color="inherit">Social</Button>
  
        <Box sx={{ flexGrow: 1 }} />
        <div sx={{ marginRight: 1 }}>Version: {packageJson.version}</div> 
        <IconButton href="https://test-blog.axelsparkster.gg/" color="inherit" aria-label="menu">
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