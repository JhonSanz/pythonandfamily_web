import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import chartsList from 'utils/chartsList';
import { useNavigate } from "react-router-dom";

const TemporaryDrawer = ({
  state, setState
}) => {
  const navigate = useNavigate();
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
            <ListItem key={'Home'} disablePadding>
              <ListItemButton onClick={() => navigate("/")}>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            {
              chartsList.map((item) => (
                <ListItem key={item.listName} disablePadding>
                  <ListItemButton onClick={() => navigate(item.route)}>
                    <ListItemText primary={item.listName} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default TemporaryDrawer;
