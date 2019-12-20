# markdown-it-copy

[![NPM version][npm-image]][npm-url]
[![download][downloads-image]][github-url]
[![NPM][nodei-image]][npm-url]

> A vuepress-plugin that copy code and others.

## Example

[🔗 example](https://realign.github.io/markdown-it-copy/)

![image_png](https://img.alicdn.com/tfs/TB1fcYbrhD1gK0jSZFKXXcJrVXa-1764-830.png)

## Installation

```bash
npm install markdown-it-copy -S
```

## Usage

### In-Plugin

```js
const options = {
    btnText: String, // 'copy' | button text
    failText: String, // 'copy fail' | copy-fail text
    successText: String, // 'copy success' | copy-success text
    successTextDelay: Number, // 2000 | successText show time [ms]
    extraHtmlBeforeBtn: String, // '' | a html-fragment before <button>
    extraHtmlAfterBtn: String, // '' | a html-fragment after <button>
};

const md = require('markdown-it')()
    .use(require('markdown-it-copy'), options);
```

### Style of Button and Notify

Normal-theme path: `./theme/default.css`

also, you can write style by yourself.

the html structure and class as follow:

```html
<div class="m-mdic-copy-wrapper">
    ${extraHtmlBeforeBtn}
    <div class="u-mdic-copy-notify">
        ${successText}
    </div>
    <button class="u-mdic-copy-btn j-mdic-copy-btn">
        ${btnText}
    </button>
    ${extraHtmlAfterBtn}
</div>
```

[github-url]: https://github.com/ReAlign/markdown-it-copy
[npm-url]: https://www.npmjs.com/package/markdown-it-copy
[npm-image]: https://img.shields.io/npm/v/markdown-it-copy.svg
[downloads-image]: https://img.shields.io/npm/dt/markdown-it-copy.svg
[nodei-image]: https://nodei.co/npm/markdown-it-copy.png?downloads=true&downloadRank=true&stars=true