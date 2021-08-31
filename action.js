module.exports = function action(applicationPackage, allowBeta = false, allowTags = false) {

  const dependencies = Object.values(applicationPackage.dependencies || {});
  const devDependencies = Object.values(applicationPackage.devDependencies || {});

  if (dependencies.some(it => (it.includes('beta.') && !allowBeta) || (it.match(/\w@.+$/) && !allowTags))) {
    return false;
  }

  if (devDependencies.some(it => (it.includes('beta.') && !allowBeta) || (it.match(/\w@.+$/) && !allowTags))) {
    return false;
  }

  return true;
};
