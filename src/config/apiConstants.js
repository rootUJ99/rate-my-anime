/* eslint-disable no-unused-vars */
const MockApiConstants = {
  moduleName: {
    apiName: {
      apiConfig: {
        url: '/api/policymgmt/updatePolicy/{policyRefId}',
        method: 'POST',
      },
      config: {
        pathVariables: {
          policyRefId: '', // Value to be set in the component
        },
        urlParams: {
          sampleParamKey: '', // Key value to be set in the component
        },
        headers: {
          sampleParamKey: '', // Key value to be set in the component
          // Authorization: ' ',
        },
      },
      attachPrefix: true,
      skipAuth: false, // ForJWT- Used for calls where authis not required
      useRefreshToken: false, // ForJWT- Default(assumed):false --> Enforces refresh_token to be used instead of access_token
    },
  },
};

const ApiConstants = {
  anime: {
    list: {
      apiConfig: {
        url: '/api/animeList',
        method: 'GET',
      },
      attachPrefix: true,
      skipAuth: false,
    },
    add: {
      apiConfig: {
        url: '/api/addAnime',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: false,
    },
    update: {
      apiConfig: {
        url: '/api/updateAnime/{id}',
        method: 'PUT',
      },
      config: {
        pathVariables: {
          id: '',
        },
      },
      attachPrefix: true,
      skipAuth: false,
    },
    delete: {
      apiConfig: {
        url: '/api/deleteAnime/{id}',
        method: 'DELETE',
      },
      config: {
        pathVariables: {
          id: '',
        },
      },
      attachPrefix: true,
      skipAuth: false,
    },
  },
  user: {
    login: {
      apiConfig: {
        url: '/users/token',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true,
    },
    register: {
      apiConfig: {
        url: '/users/create',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true,
    },
    detail: {
        apiConfig: {
          url: '/users/details/{id}',
          method: 'GET',
        },
        config: {
          pathVariables: {
            id: '',
          },
        },
        attachPrefix: true,
        skipAuth: false,
    },
    update: {
        apiConfig: {
          url: '/users/details/{id}',
          method: 'PUT',
        },
        config: {
          pathVariables: {
            id: '',
          },
        },
        attachPrefix: true,
        skipAuth: false,
    },
  },
};

export default ApiConstants;
