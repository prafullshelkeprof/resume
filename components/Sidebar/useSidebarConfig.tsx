import { useMemo } from 'react';
import {
  Languages,
  Hobbies,
  PersonalInfo,
  Technologies,
} from 'components';
import { Box } from '@mui/material';
import { ContactPhoneOutlined, DeveloperModeOutlined, LanguageOutlined, SportsCricketOutlined } from '@mui/icons-material';
const useSidebarConfig = () => {

  const SIDEBAR_CONFIG = useMemo(() => [
    {
      label: <Box display={'flex'}>
        <ContactPhoneOutlined />
        Personal Info
      </Box>,
      component: <PersonalInfo />,
    },
    {
      label: <Box display={'flex'}>
        <DeveloperModeOutlined />
        Skills
      </Box>,
      component: <Technologies />
    },
    {
      label: <Box display={'flex'}>
        <LanguageOutlined />
        Languages
      </Box>,
      component: <Languages />
    },
    {
      label: <Box display={'flex'}>
        <SportsCricketOutlined />
        Hobbies
      </Box>,
      component: <Hobbies />
    }], [])
  return [SIDEBAR_CONFIG]
};
export { useSidebarConfig };