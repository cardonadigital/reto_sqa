module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: ['src/**/*.ts'], 
    paths: ['src/features/**/*.feature'],
    format: ['progress', 'json:reports/cucumber-report.json']
  }
};
