const action = require('./action');

describe('action', () => {

  test('should pass when no beta and tagged versions exist', () => {
    //given
    const packageFile = {
      'dependencies': {
        '@actions/core': '^1.4.0',
        'dep1': '^2.0.0-beta.1',
        'dep2': '^1.0.0@next'
      },
      'devDependencies': {
        '@vercel/ncc': '^0.29.0',
        'eslint': '^7.32.0',
        'eslint-plugin-jest': '^24.4.0',
        'jest': '^27.0.6',
        'dep1': '^2.0.0-beta.1',
        'dep2': '^1.0.0@next'
      }
    };

    // expect
    expect(action(packageFile)).toEqual(false);
    expect(action(packageFile, true)).toEqual(false);
    expect(action(packageFile, true, true)).toEqual(true);
    expect(action(packageFile, true, false)).toEqual(false);
    expect(action(packageFile, false, true)).toEqual(false);
    expect(action(packageFile, false, false)).toEqual(false);
  });
});
