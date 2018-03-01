
#!/bin/bash

yarn install
yarn build
yarn unit
yarn e2e -- --env ci_chrome,ci_safari,ci_ie11,ci_firefox