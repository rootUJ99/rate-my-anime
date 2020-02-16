/* Environments */
const environments = {
  PROD: 'PROD',
  DEV: 'DEV',
  SIT: 'SIT',
  UAT: 'UAT',
  UAT1: 'UAT1',
  DEFAULT: 'DEV',
};

const currentEnvironment =
  process.env.RUN_MODE && Object.keys(environments).includes(process.env.RUN_MODE)
    ? environments[process.env.RUN_MODE]
    : environments.DEFAULT;

/* URL Prefixes */
const apiUrlPrefixes = {
  [environments.PROD]: 'https://www.symboinsurance.com',
  [environments.DEV]: 'http://localhost:3001',
  [environments.SIT]: 'http://172.31.110.237:8082',
  [environments.UAT]: 'http://uat.symboinsurance.com',
  [environments.UAT1]: 'http://uat1.symboinsurance.com',
  // [environments.DEV]: 'http://192.168.0.57:9002',
};

/* URL Prefixes For local apis */
const localApiUrlPrefixes = {
  [environments.PROD]: 'https://www.symboinsurance.com',
  [environments.DEV]: 'http://localhost:8090',
  [environments.SIT]: 'http://sit.symboinsurance.com:8090',
  [environments.UAT]: 'http://uat.symboinsurance.com:8090',
  [environments.UAT1]: 'http://uat1.symboinsurance.com',
  // [environments.DEV]: 'http://192.168.0.57:9002',
};

const currentApiUrlPrefix = apiUrlPrefixes[currentEnvironment];

/* Log configuration */
const logLevels = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  OFF: 'SILENT',
};

const environmentConfigs = {
  [environments.PROD]: {
    enableAuthorization: true,
    enableMock: false,
    logLevel: logLevels.WARN,
  },
  [environments.DEV]: {
    enableAuthorization: true,
    enableMock: false,
    logLevel: logLevels.DEBUG,
  },
  [environments.SIT]: {
    enableAuthorization: true,
    enableMock: false,
    logLevel: logLevels.DEBUG,
  },
  [environments.UAT]: {
    enableAuthorization: true,
    enableMock: false,
    logLevel: logLevels.DEBUG,
  },
  [environments.UAT1]: {
    enableAuthorization: true,
    enableMock: false,
    logLevel: logLevels.DEBUG,
  },
};

const currentEnvironmentConfig = environmentConfigs[currentEnvironment];

/* Exports */
export {
  environments,
  currentEnvironment,
  apiUrlPrefixes,
  currentApiUrlPrefix,
  localApiUrlPrefixes,
  environmentConfigs,
  currentEnvironmentConfig,
  logLevels,
};
