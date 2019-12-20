const path = require('path');
const fse = require('fs-extra');

const oriCss = path.join(__dirname, '..', 'theme', 'default.css');
const finalCss = path.join(__dirname, '..', 'demo', 'css', 'default.css');

fse.moveSync(oriCss, finalCss, { overwrite: true });
