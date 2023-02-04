import { useMemo } from 'react';
import { LinearProgress } from '@mui/material';
import { IBasicList } from 'components';
type TListOptions = IBasicList['listOptions'];
const useTechData = () => {
  const getLinearProgressComponent = (value) => <LinearProgress variant='determinate' value={value} />
  const TECHNOLOGIES: TListOptions =useMemo(() => [
    {
      label: 'React',
      content: getLinearProgressComponent(90)
    },
    {
      label: 'Typescript',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'Javascript',
      content: getLinearProgressComponent(90)
    },
    {
      label: 'HTML',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'CSS',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'Jest',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'Vue',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'Next',
      content: getLinearProgressComponent(60)
    },
    {
      label: 'Storybook',
      content: getLinearProgressComponent(80)
    },
    {
      label: 'Graphql',
      content: getLinearProgressComponent(80)
    },
  ], [])
  return [TECHNOLOGIES];
}

export {
  useTechData
}