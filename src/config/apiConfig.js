import {
  currentApiUrlPrefix,
  // localApiUrlPrefixes,
  currentEnvironmentConfig,
} from './environmentConfig';
// import { getFromLocalStorage } from '../utils';
import ApiConstants from './apiConstants';

const getJWTHeader = (config, useRefreshToken = false) => {
  const enhancedConfig = config;
  const token = localStorage.getItem('token');
  enhancedConfig.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  return enhancedConfig;
};
const spinLoaderConfigDefault = {
  isEnabled: true,
  actionFunction: () => {},
  spinLoaderKey: 'appLevelLoader',
};

const handleSessionTimout = (error) => {
  if (error && error.response && error.response && error.response.status === 403) {
    console.log(error.response);
    localStorage.removeItem('token');
    window.location.replace('/profile');
  }
};

const getAxiosApiConfig = apiKey => {
  // eslint-disable-next-line no-bitwise
  if (apiKey && ~apiKey.indexOf('.')) {
    const apiKeyParams = apiKey.split('.');
    if (apiKey && ApiConstants[apiKeyParams[0]] && ApiConstants[apiKeyParams[0]][apiKeyParams[1]]) {
      const currentApi = ApiConstants[apiKeyParams[0]][apiKeyParams[1]];
      const apiConfig = { ...currentApi.apiConfig };
      if (currentApi.attachPrefix) {
        apiConfig.url = currentApiUrlPrefix + apiConfig.url;
        // for development mode
        // const url = apiConfig.url.replace('/api', '');
        // apiConfig.url = currentApiUrlPrefix + url;
      }
      return {
        ...apiConfig,
      };
    }
  }
  return null;
};

const getConfig = apiKey => {
  let config = {};
  // eslint-disable-next-line no-bitwise
  if (apiKey && ~apiKey.indexOf('.')) {
    const apiKeyParams = apiKey.split('.');
    if (
      apiKeyParams.length &&
      ApiConstants[apiKeyParams[0]] &&
      ApiConstants[apiKeyParams[0]][apiKeyParams[1]]
    ) {
      const currentApi = ApiConstants[apiKeyParams[0]][apiKeyParams[1]];
      config = { ...currentApi.config };
      config = config || {};
      if (currentEnvironmentConfig.enableAuthorization && !currentApi.skipAuth) {
        config = getJWTHeader(config, currentApi.useRefreshToken);
        config.handleSessionTimout = handleSessionTimout;
      }
      config.apiKey = apiKey;
    }
  }
  return config;
};

export { getAxiosApiConfig, getConfig, spinLoaderConfigDefault };
