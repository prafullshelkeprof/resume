import { Box } from '@mui/material';
import {
  Sidebar,
  MainContent,
  DataContext,
} from 'components';

const Mainframe = () => {
  return (
    <Box>
      <DataContext>
        <Sidebar />
        <MainContent />
      </DataContext>
    </Box>
  )
}
export default Mainframe;