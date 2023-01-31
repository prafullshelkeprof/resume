import { BasicList } from 'components';
import { HOBBIES_CONFIG } from './hobbies-config';

const Hobbies = () => {
  return (
    <>
      <BasicList listOptions={HOBBIES_CONFIG} />
    </>
  )
}
export default Hobbies;