import { Divider, Typography } from '@mui/material';

interface IOrganizationExp {
  timeInOrganization: string;
  workSummary: string;
}
const OrganizationExp = (props: IOrganizationExp) => {
  const { timeInOrganization, workSummary } = props;
  return (
    <>
      <Divider />
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