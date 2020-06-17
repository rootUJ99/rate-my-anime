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
        url: '/api/anime/list',
        method: 'GET',
      },
      attachPrefix: true,
      skipAuth: false,
    },
    add: {
      apiConfig: {
        url: '/api/anime/add',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: false,
    },
    update: {
      apiConfig: {
        url: '/api/anime/update/{id}',
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
        url: '/api/anime/delete/{id}',
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
    myAnimeList: {
      apiConfig: {
        url: '/api/anime/myAnimelist?animeName=naruto',
        method: 'GET',
      },
      config: {
        pathVariables: {
          id: '',
        },
      },
      attachPrefix: true,
      skipAuth: false,
    }
  },
  user: {
    login: {
      apiConfig: {
        url: '/api/user/token',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true,
    },
    register: {
      apiConfig: {
        url: '/api/user/create',
        method: 'POST',
      },
      attachPrefix: true,
      skipAuth: true,
    },
    detail: {
        apiConfig: {
          url: '/api/user/details/{id}',
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
          url: '/api/user/details/{id}',
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
