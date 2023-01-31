import { BasicList } from 'components';
import { TECHNOLOGIES } from './tech-config';

const Languages = () => {
  return (
    <>
      <BasicList listOptions={TECHNOLOGIES} />
    </>
  )
}
export default Languages;