import { useContext } from 'react';
import {
  IconButton,
  Box,
} from '@mui/material';
import { ChevronLeft, Menu } from '@mui/icons-material';

import {
  BasicDrawer,
  ProfileImage,
  BasicAccordion,
  context,
} from 'components';
import { v4 as uuidv4 } from 'uuid';
import { useSidebarConfig } from './useSidebarConfig';
const Sidebar = () => {
  const [SIDEBAR_CONFIG] = useSidebarConfig();
  const { isSidebarOpen, setIsSidebarOpen, drawerWidth } = useContext(context);

  const handleDrawerClose = () => {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <BasicDrawer
        open={isSidebarOpen}
        hideBackdrop
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}>
        <Box>
          <IconButton onClick={handleDrawerClose} edge='start'>
            <ChevronLeft />
          </IconButton>
        </Box>
        <ProfileImage />
        {SIDEBAR_CONFIG.map((current) => {
          return <BasicAccordion
            key={uuidv4()}
            disableGutters
            label={current.label}>
            {current.component}
          </BasicAccordion>
        })}
      </BasicDrawer>
    </>
  )
}
export default Sidebar;