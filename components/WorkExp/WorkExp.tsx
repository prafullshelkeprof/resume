import { Box, Divider, Typography } from '@mui/material';
import { BasicList, OrganizationExp } from 'components';
import { useMemo } from 'react';
import { WORK_CONFIG } from './work-config';
const WorkExp = () => {
  const expOptions = useMemo(() => WORK_CONFIG.map((current) => {
    return {
      label: current.organizationName,
      content: <OrganizationExp  {...current} />
    }
  }), [])

  return (
    <Box>
      <Typography variant='h5'>Work Experience</Typography>
      <Divider></Divider>
      <BasicList listOptions={expOptions}></BasicList>
    </Box>
  )
}
export default WorkExp;