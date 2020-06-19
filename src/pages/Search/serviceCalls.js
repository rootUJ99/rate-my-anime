import ApiService from '../../config/apiService';
import { getConfig } from '../../config/apiConfig';

export const getMyAnimeList = async(value) =>{
    const config = getConfig('anime.myAnimeList');
    config.urlParams = {
      animeName: value
    }
    const apiInstance = new ApiService(config);
    return apiInstance.call()
  }
  