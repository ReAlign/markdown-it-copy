# markdown-it-copy

[![NPM version][npm-image]][npm-url]
[![download][downloads-image]][github-url]
[![NPM][nodei-image]][npm-url]

> A vuepress-plugin that copy code and others.

## Installation

```bash
npm install markdown-it-copy -S
```

## Usage

### In-Plugin

```js
const options = {
    btnText: '', // 'Copy' | button text
    extraHtmlBeforeBtn: '', // '' | a html-fragment before <button>
    extraHtmlAfterBtn: '', // '' | a html-fragment after <button>
};

const md = require('markdown-it')()
            .use(require('markdown-it-copy'), [, options]);
```

### In-PageAfterMarkdownRendered

It will call `window.MDIC.btnClick` when copy-button clicked, so need a window object in the page that after markdown rendered. as:

```js
window.MDIC = {
    // btn is button-element
    // copy-code in: btn.dataset.mdiccont
    btnClick(btn) {
        // Todo
    },
};
```

## ChangeLog

* v0.1.0
  * 2019-12-19

[github-url]: https://github.com/ReAlign/markdown-it-copy
[npm-url]: https://www.npmjs.com/package/markdown-it-copy
[npm-image]: https://img.shields.io/npm/v/markdown-it-copy.svg
[downloads-image]: https://img.shields.io/npm/dt/markdown-it-copy.svg
[nodei-image]: https://nodei.co/npm/markdown-it-copy.png?downloads=true&downloadRank=true&stars=true