import { Cookies } from 'react-cookie';
import { wrapper } from '../../store';
const cookies = new Cookies();
/**
 * Axios interceptor that add accessToken for request is presented
 * @param config - axios config object
 * @returns {AddTokenHeaderIterceptor.props}
 * @constructor
 */
const AddTokenHeaderIterceptor = config => {
  try {
    const token = cookies.get('deally:token');
    config.headers["x-access-token"] = `${token}`;
  } catch (err) {
    console.log('Error:', err);
  }
  return config;
};

export default AddTokenHeaderIterceptor;
