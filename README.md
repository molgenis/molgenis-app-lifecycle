# molgenis-app-lifecycle

A variable catalogue to explain which variables are used to do harmonised research

## Setup

```bash
git clone git@github.com:molgenis/molgenis-app-lifecycle.git
cd molgenis-app-lifecycle
yarn
# Update proxy-settings if needed; the default should be fine for development
cp .lifecyclerc.example .lifecyclerc
yarn dev
# Goto http://localhost:8080/login to create a session cookie
```

## Configuring Molgenis

### Upload the data

You can upload the [LifeCycle test data](sample-data/lifecycle_test.xlsx) into MOLGENIS and start the app. You need to make sure the tables called in the action.js. Are also present in the MOLGENIS instance.

### Test with a running MOLGENIS instance

For local testing with a running MOLGENIS instance you have to alter the config of the app. Comment in the following block:

```config/index.js```

```javascript
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // Beginning of block
    proxyTable: {
      '/login': {
        target: 'http://localhost:8080'
      },
      '/api': {
        target: 'http://localhost:8080'
      }
    },
    // End of block
```

Comment out this block in the same file.

```javascript
/**
 * GET and POST interceptors
 * Removes the need for a running backend during development
 */
No mock data available
```

That is it. Run a molgenis instance on localhost:8080 and start the core variable catalogue with:

```javascript
yarn dev
```

## Build your MOLGENIS app

Create a working application that can be imported in MOLGENIS directly by executing:

```bash
yarn build
```

You can add your app to a MOLGENIS instance from this location: ```dist/molgenis-app-lifecycle.zip```.
