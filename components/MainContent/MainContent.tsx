import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';

import {
  PersonalSummary,
  WorkExp,
  Education,
  BasicAppBar,
  context
} from 'components';

const MainContent = () => {

  const theme = useTheme();
  const { drawerWidth, isSidebarOpen } = useContext(context);
  return (
    <Box sx={
      {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(isSidebarOpen && {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: { sm: 0, md: `${drawerWidth}px` },
        }),
      }
    }>
      <BasicAppBar />
      <PersonalSummary />
      <WorkExp />
      <Education />
    </Box>
  )
}



export default MainContent;