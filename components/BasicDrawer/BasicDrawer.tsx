import type { PropsWithChildren } from 'react';
import Drawer from '@mui/material/Drawer';
import type { DrawerProps } from '@mui/material/Drawer';

type TAnchor = DrawerProps['anchor'];
interface IBasicDrawer extends PropsWithChildren, DrawerProps {
}
const BasicDrawer = (props: IBasicDrawer) => {

  const { children } = props;
  return (
    <>
      <Drawer
        {...props}
      >
        {children}
      </Drawer>
    </>
  );
}
export default BasicDrawer;