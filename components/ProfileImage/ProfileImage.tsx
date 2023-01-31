import { Avatar, Grid } from '@mui/material';

const ProfileImage = () => {
  return (
    <Grid display="flex" justifyContent="center" alignItems="center">
      <Avatar
        src='https://media.licdn.com/dms/image/C4D03AQENoYynaDSX1A/profile-displayphoto-shrink_800_800/0/1631011803097?e=1680739200&v=beta&t=XOAhFZMQfYVu057hYZ7sqCHWM75hws7LXGnGF15tArs'
        sx={{ width: 150, height: 150 }}
      />
    </Grid>
  )
}
export default ProfileImage;