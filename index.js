const fs = require('fs');
const core = require('@actions/core');
const { reportAction } = require('@gh-stats/reporter');
const applicationPackage = JSON.parse(String(fs.readFileSync('./package.json', 'utf-8')));

const allowBeta = core.getInput('allow-beta') || false;
const allowTags = core.getInput('allow-tags') || false;

reportAction();

const action = require('./action');
const result = action(applicationPackage, allowBeta, allowTags);
if (!result) core.setFailed('no beta versions allowed in main branch!');
