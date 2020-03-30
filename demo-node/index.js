const fs = require('fs');
const path = require('path');
// https://highlightjs.org/
const hljs = require('highlight.js');

const mdTextPath = path.join(__dirname, 'text.md');
const originHtmlPath = path.join(__dirname, 'origin.html');
const outputPath = path.join(__dirname, '..', 'demo', 'index.html');
const hlOpts = {
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log(__);
      }
    }

    return ''; // use external default escaping
  },
};
const mdText = fs.readFileSync(mdTextPath).toString();
const originHtml = fs.readFileSync(originHtmlPath).toString();

const md = require('markdown-it')(hlOpts)
  .use(require('../index'), {
    showCodeLanguage: true,
    attachText: '@ReAlign Copyright\nanother text',
  });

const result = md.render(mdText);

const html = originHtml.replace('{_}', result);

fs.writeFileSync(outputPath, html);
