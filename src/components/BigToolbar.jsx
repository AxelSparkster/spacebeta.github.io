import { Link } from 'react-router-dom';
import { Toolbar, Button, Box, IconButton}  from '@mui/material';
import { Twitter, GitHub, ViewKanban, Book } from '@mui/icons-material';
import packageJson from '../../package.json' // TODO: hide later somehow

export default function BigToolbar(){
    return (
      <Toolbar position="fixed">
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/social" color="inherit">Social</Button>
        
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ marginRight: 5 }}>Version: {packageJson.version}</div> {/* TODO: hide the version better to not expose package.json? */}
        <IconButton href="https://test-blog.axelsparkster.gg/" color="inherit" aria-label="menu">
          <Book />
        </IconButton>
        <IconButton href="https://twitter.com/AxelSparkster" color="inherit" aria-label="menu">
          <Twitter />
        </IconButton>
        <IconButton href="https://github.com/AxelSparkster" color="inherit" aria-label="menu">
          <GitHub />
        </IconButton>
        <IconButton href="https://trello.com/b/CtYfAAPA/shootingintospace" color="inherit" aria-label="menu">
          <ViewKanban />
        </IconButton>
      </Toolbar>
    );
}