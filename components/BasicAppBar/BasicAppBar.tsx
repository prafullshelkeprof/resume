import { useContext } from 'react';
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { context } from 'components';

const BasicAppBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(context);
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant='h3' noWrap>
            Prafull Shelke
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default BasicAppBar;