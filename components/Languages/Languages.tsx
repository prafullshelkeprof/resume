import { BasicList } from 'components';
import { LANGUAGES_CONFIG } from './language-config';

const Languages = () => {
  return (
    <>
      <BasicList listOptions={LANGUAGES_CONFIG} />
    </>
  )
}
export default Languages;