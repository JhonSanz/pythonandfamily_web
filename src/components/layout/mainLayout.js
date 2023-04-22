import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const TemporaryDrawer = ({ }) => {
  const [state, setState] = React.useState(false);
  return (
    <Box>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setState(!state)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={() => setState(false)}
      >
        <Box
          role="presentation"
          onClick={() => setState(!state)}
        >
          <List>
            <ListItem key={'list'} disablePadding>
              <ListItemButton>
                <ListItemText primary={"test"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}


export default TemporaryDrawer;


