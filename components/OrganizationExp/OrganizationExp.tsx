import { Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface IOrganizationExp {
  timeInOrganization: ReactNode;
  workSummary: ReactNode;
}
const OrganizationExp = (props: IOrganizationExp) => {
  const { timeInOrganization, workSummary } = props;
  return (
    <>
      <Typography
        component='div'
        variant='body2'
      >{timeInOrganization}</Typography>
      <Typography
        component='div'
        variant='body2'
      >{workSummary}</Typography>
    </>
  )
}
export default OrganizationExp;