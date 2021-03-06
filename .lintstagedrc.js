'use strict'

module.exports = {
  '*.{js,ts}': [
    'yarn prettier --write',
    'yarn eslint --fix',
    'jest --bail --findRelatedTests --config .jestrc.json',
  ],
  '*.{json,yaml,yml}': 'yarn prettier --write',
  '*.md': (filenames) => {
    return [`yarn prettier --write ${filenames.join(' ')}`, 'yarn remark .']
  },
  '*ignore-sync': 'ignore-sync',
}
