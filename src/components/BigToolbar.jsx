import { Link } from 'react-router-dom';
import { Toolbar, Button, Box, IconButton}  from '@mui/material';
import { version } from '../version'

export default function BigToolbar(){
    return (
      <Toolbar position="fixed">
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/social" color="inherit">Social</Button>
        
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ marginRight: 5 }}>Version: {version}</div> {/* TODO: hide the version better to not expose package.json? */}
        <IconButton href="https://test-blog.axelsparkster.gg/" color="inherit" aria-label="menu">
          <i class="fa-solid fa-blog"></i>
        </IconButton>
        <IconButton href="https://axelsparkster.gg" color="inherit" aria-label="menu">
          <i class="fa-brands fa-bluesky"></i>
        </IconButton>
        <IconButton href="https://github.com/AxelSparkster" color="inherit" aria-label="menu">
          <i class="fa-brands fa-github"></i>
        </IconButton>
        <IconButton href="https://trello.com/b/CtYfAAPA/shootingintospace" color="inherit" aria-label="menu">
          <i class="fa-brands fa-trello"></i>
        </IconButton>
      </Toolbar>
    );
}