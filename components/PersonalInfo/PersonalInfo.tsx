import {  Link, Divider} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { Mail, PhoneAndroid, LocationOn, LinkedIn } from '@mui/icons-material';
import { Box } from '@mui/system';
const PERSONAL_INFO = [
  {
    field: 'E-mail',
    value: <Link href='mailto:prafullshelkeprof@gmail.com'>prafullshelkeprof@gmail.com</Link>,
    icon: <Mail />
  },
  {
    field: 'Phone',
    value: '+45 71853579',
    icon: <PhoneAndroid />
  },
  {
    field: 'Location',
    value: 'Denmark, Copenhagen',
    icon: <LocationOn />
  },
  {
    field: 'Linkedin',
    value: <Link href='https://www.linkedin.com/in/prafull-shelke-402520ba/'>linkedin.com/prafull.shelke</Link>,
    icon: <LinkedIn />
  }
]
const PersonalInfo = () => {
  return (
    <>
      {PERSONAL_INFO.map((current) => {
        return (
          <Box key={uuidv4()} mb={2} sx={{display: 'flex'}}>
            <Box>{current.icon}</Box>
            <Box ml={2}>{current.value}</Box>
          </Box>
        );
      })}
    </>
  )
}
export default PersonalInfo;