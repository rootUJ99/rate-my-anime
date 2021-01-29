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
  [environments.PROD]: '/',
  [environments.DEV]: 'http://localhost:3001',
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
  environmentConfigs,
  currentEnvironmentConfig,
  logLevels,
};
