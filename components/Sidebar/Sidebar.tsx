import { useContext } from 'react';
import {
  IconButton,
  Box,
} from '@mui/material';
import { ChevronLeft, Menu } from '@mui/icons-material';

import {
  BasicDrawer,
  Languages,
  Hobbies,
  ProfileImage,
  PersonalInfo,
  Technologies,
  BasicAccordion,
  context,
} from 'components';
import { v4 as uuidv4 } from 'uuid';
const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, drawerWidth } = useContext(context);
  const sidebar_config = [
    {
      label: 'Personal Info',
      component: <PersonalInfo />,
    },
    {
      label: 'Skills',
      component: <Technologies />
    },
    {
      label: 'Languages',
      component: <Languages />
    },
    {
      label: 'Hobbies',
      component: <Hobbies />
    }];
  const handleDrawerClose = () => {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <BasicDrawer
        open={isSidebarOpen}
        hideBackdrop
        variant='persistent'
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
        {sidebar_config.map((current) => {
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