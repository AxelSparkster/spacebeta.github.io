import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import MenuIcon from '@mui/icons-material/Menu';
import packageJson from '../../package.json' // TODO: hide later somehow
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

export default function SmallToolbar(){
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
            linkbutton="true"
            href="https://test-blog.axelsparkster.gg/"
            target="_blank"
            component="a"
            onClick={handleClose}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </MenuItem>
          <MenuItem
            linkbutton="true"
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
            linkbutton="true"
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
            linkbutton="true"
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