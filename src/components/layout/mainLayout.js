import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import repo from 'utils/chartsList';
import { useNavigate } from "react-router-dom";
import { MATH, STATS } from 'utils/const';
import CustomToolbar from 'styled/toolbar';
import CustomSelect from 'styled/select';

const TemporaryDrawer = ({
  state, setState, subject, setSubject
}) => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSubject(event.target.value);
    navigate("/");
  };
  return (
    <Box>
      <Box>
        <AppBar position="static">
          <CustomToolbar subject={subject} variant="dense">
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
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <CustomSelect
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={subject}
                onChange={handleChange}
                size='small'
              >
                <MenuItem value={MATH}>{MATH}</MenuItem>
                <MenuItem value={STATS}>{STATS}</MenuItem>
              </CustomSelect>
            </FormControl>
          </CustomToolbar>
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
              repo[subject] !== undefined && repo[subject].map((item) => (
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
