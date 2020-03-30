# markdown-it-copy

[![NPM version][npm-image]][npm-url]
[![download][downloads-image]][github-url]<br>
[![NPM][nodei-image]][npm-url]

> A markdown-it-plugin that copy code and others.

## Todo

* [ ] 复制内容尾部增加版权说明

## Example

[🔗 example](https://realign.github.io/markdown-it-copy/)

![image_png](https://img.alicdn.com/tfs/TB1fcYbrhD1gK0jSZFKXXcJrVXa-1764-830.png)

## Installation

```bash
npm install markdown-it-copy -S
```

## Usage

### Plugin

```js
const options = {
    btnText: String, // 'copy' | button text
    failText: String, // 'copy fail' | copy-fail text
    successText: String, // 'copy success' | copy-success text
    successTextDelay: Number, // 2000 | successText show time [ms]
    extraHtmlBeforeBtn: String, // '' | a html-fragment before <button>
    extraHtmlAfterBtn: String, // '' | a html-fragment after <button>
    showCodeLanguage: Boolean, // false | show code language before [btn || extraHtmlBeforeBtn] | [add-after-1.1.0]
    attachText: String, // '' | some text append copyText， Such as: copyright | [add-after-1.2.0]
};

const md = require('markdown-it')()
    .use(require('markdown-it-copy'), options);

md.render(`${mdText}`);

// Tips: you may need to highlight your code, as follow:

const hljs = require('highlight.js');
const hlOpts = {
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log(__);
      }
    }
    return '';
  },
};

require('markdown-it')(hlOpts);
```

### Style of Button and Notify

Normal-theme:

* css: [default.css](https://github.com/ReAlign/markdown-it-copy/blob/master/theme/default.css)
* stylus: [default.styl](https://github.com/ReAlign/markdown-it-copy/blob/master/theme/default.styl)

also, you can write style by yourself.

the html structure and class as follow:

```html
<div class="m-mdic-copy-wrapper">
    <!-- if need show it -->
    <span class="u-mdic-copy-code_lang">${codeLang}</span>
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

## Releases

### 1.0.x

#### 1.0.0、1.0.1

* [new function]
  * Support basic copy function

### 1.1.x

#### 1.1.0

* [new function]
  * Support show `code-language` before `btn` or `extraHtmlBeforeBtn`

#### 1.1.1

* [fix bug]
  * Compatible with a variety of templates
    * `<div class="language-js">`
    * `<code class="language-js">`
    * `<pre class="language-js">`
    * etc.

#### 1.1.2

* [fix bug]
  * `Single quotes` encode
    * error: `'` -> `&apos;`
    * ok: `'` -> `\'`

### 1.2.x

#### 1.2.0

* [new function]
  * Support append text behind to copy content, such as: Copyright info.

[github-url]: https://github.com/ReAlign/markdown-it-copy
[npm-url]: https://www.npmjs.com/package/markdown-it-copy
[npm-image]: https://img.shields.io/npm/v/markdown-it-copy.svg
[downloads-image]: https://img.shields.io/npm/dt/markdown-it-copy.svg
[nodei-image]: https://nodei.co/npm/markdown-it-copy.png?downloads=true&downloadRank=true&stars=true
