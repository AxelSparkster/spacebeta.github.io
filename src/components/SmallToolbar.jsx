import * as React from 'react';
import { Link } from 'react-router-dom';

import { Box, Toolbar, IconButton, ListItemText, ListItemIcon, MenuItem, Typography, Menu } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { version } from '../version'

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
            slotProps={{ paper: { sx: {width: '250px'}}}}>
                <MenuItem component={Link} to="/">
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/about">
                    <ListItemText>About</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/social">
                    <ListItemText>Social</ListItemText>
                </MenuItem>
        
                {/* TODO: programmatically make these? */}
                <MenuItem
                    linkbutton="true"
                    href="https://test-blog.axelsparkster.gg/"
                    target="_blank"
                    component="a"
                    onClick={handleClose}>
                    <ListItemIcon>
                    <i class="fa-solid fa-blog"></i>
                    </ListItemIcon>
                    <ListItemText>Blog</ListItemText>
                </MenuItem>
                <MenuItem
                    linkbutton="true"
                    href="https://axelsparkster.gg"
                    target="_blank"
                    component="a"
                    onClick={handleClose}>
                    <ListItemIcon>
                    <i class="fa-brands fa-bluesky"></i>
                    </ListItemIcon>
                    <ListItemText>Bluesky</ListItemText>
                </MenuItem>
                <MenuItem
                    linkbutton="true"
                    href="https://github.com/AxelSparkster"
                    target="_blank"
                    component="a"
                    onClick={handleClose}>
                    <ListItemIcon>
                    <i class="fa-brands fa-github"></i>
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
                    <i class="fa-brands fa-trello"></i>
                    </ListItemIcon>
                    <ListItemText>Trello</ListItemText>
                </MenuItem>

                <Box sx={{ pl: 1, pr: 1 }}>
                    <Typography style={{marginRight: 5}} variant="subtitle2" align="right">Version: {version}</Typography> {/* TODO: hide the version better to not expose package.json? */}
                </Box> 
            </Menu>
        </Toolbar>
    )
  }