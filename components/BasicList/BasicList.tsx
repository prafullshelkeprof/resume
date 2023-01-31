import type { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Box, List, ListItem, ListItemText } from '@mui/material';

interface IBasicList {
  listOptions:
  {
    label: ReactNode,
    content?: ReactNode
  }[]
}
const BasicList = (props: IBasicList) => {
  const { listOptions } = props;
  const listOptionsFrag = listOptions.map((currentOpt) => {
    return (
      <ListItem disablePadding key={uuidv4()} sx={{
        display: 'unset'
      }}>
        <ListItemText> {currentOpt.label}</ListItemText>
        {currentOpt?.content && <Box sx={
          {
            color: 'rgba(0, 0, 0, 0.6)'
          }
        }>{currentOpt?.content}</Box>}
      </ListItem >
    )
  })
  return (
    <List disablePadding>
      {listOptionsFrag}
    </List>
  );
}
export default BasicList;
export type {
  IBasicList
}