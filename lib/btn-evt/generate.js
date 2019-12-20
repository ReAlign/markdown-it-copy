const fs = require('fs');
const path = require('path');
const Terser = require('terser');

const inputPath = path.join(__dirname, 'origin-code.js');
const outputPath = path.join(__dirname, '..', 'code.js');

// https://github.com/terser/terser#output-options
const miniOpts = {
  output: {
    quote_style: 1,
  },
};
const bc = fs.readFileSync(inputPath);
const {
  code,
} = Terser.minify(bc.toString(), miniOpts) || {};

fs.writeFileSync(outputPath, code);
