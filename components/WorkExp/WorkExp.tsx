import { Box, Divider, Typography } from '@mui/material';
import { BasicList, OrganizationExp } from 'components';
import { useMemo } from 'react';
import { useWorkConfig } from './useWorkConfig';
const WorkExp = () => {
  const [WORK_CONFIG] = useWorkConfig();
  const expOptions = useMemo(() => WORK_CONFIG.map((current) => {
    return {
      label: current.organizationName,
      content: <OrganizationExp  {...current} />
    }
  }), [])

  return (
    <Box>
      <Typography variant='h5'>Work Experience</Typography>
      <BasicList listOptions={expOptions}></BasicList>
    </Box>
  )
}
export default WorkExp;