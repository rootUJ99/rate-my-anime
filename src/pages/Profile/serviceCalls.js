import ApiService from '../../config/apiService';
import { getConfig } from '../../config/apiConfig';

export const getToken = async(data) =>{
  const config = getConfig('user.login');
  config.data = {...data}
  const apiInstance = new ApiService(config);
  // console.log('service call',await apiInstance.call());
  return apiInstance.call()
}

export const createUserService = async(data) =>{
  const config = getConfig('user.register');
  config.data = {...data}
  const apiInstance = new ApiService(config);
  // console.log('service call',await apiInstance.call());
  return apiInstance.call()
}

export const getUserDetails = async(id) =>{
  const config = getConfig('user.detail');
  config.pathVariables = {id}
  const apiInstance = new ApiService(config);
  // console.log('service call',await apiInstance.call());
  return apiInstance.call()
}

export const updateUserService = async(data) =>{
  const config = getConfig('user.update');
  config.data = {...data}
  const apiInstance = new ApiService(config);
  // console.log('service call',await apiInstance.call());
  return apiInstance.call()
}


