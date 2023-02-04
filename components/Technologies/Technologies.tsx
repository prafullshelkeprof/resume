import { BasicList } from 'components';
import { useTechData } from './useTechConfig';

const Languages = () => {
  const [TECHNOLOGIES] = useTechData();
  return (
    <>
      <BasicList listOptions={TECHNOLOGIES} />
    </>
  )
}
export default Languages;