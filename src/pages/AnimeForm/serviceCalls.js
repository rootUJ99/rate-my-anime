import ApiService from '../../config/apiService';
import { getConfig } from '../../config/apiConfig';

export const addAnimeService = async(data) =>{
  const config = getConfig('anime.add');
  config.data= data;
  const apiInstance = new ApiService(config);
  return apiInstance.call()
}
export const updateAnimeService = async(id,data) =>{
  const config = getConfig('anime.update');
  config.data= data;
  config.pathVariables = { id };
  const apiInstance = new ApiService(config);
  return apiInstance.call()
}
export const deleteAnimeService = async(id) =>{
  const config = getConfig('anime.delete');
  config.pathVariables = { id };
  const apiInstance = new ApiService(config);
  return apiInstance.call()
}
