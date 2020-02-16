import ApiService from '../../config/apiService';
import { getConfig } from '../../config/apiConfig';

export const getAnimeList = async() =>{
  const config = getConfig('anime.list');
  // eslint-disable-next-line no-unused-vars
  const apiInstance = new ApiService(config);
  // console.log('service call',await apiInstance.call());
  return apiInstance.call()
}
