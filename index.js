const fs = require('fs');
const path = require('path');
const _ = require('./lib/utils/_');

const filePath = path.join(__dirname, 'lib', 'code.js');
const btnCode = fs.readFileSync(filePath).toString();

const LAST_TAG = '</pre>';

/**
 * @name  enhance
 * @param {*} render    | origin-render-function
 * @param {*} options   | options
 * ------
 * mdic: abbreviation of "markdown-it-copy"
 */
const enhance = (render, options = {}) => (...args) => {
  /* args = [tokens, idx, options, env, slf] */
  const {
    btnText = 'copy', // button text
    failText = 'copy fail', // copy-fail text
    successText = 'copy success', // copy-success text
    successTextDelay = 2000, // successText show time [ms]
    extraHtmlBeforeBtn = '', // '' | a html-fragment before <button>
    extraHtmlAfterBtn = '', // '' | a html-fragment after <button>
    showCodeLanguage = false, // false | show code language
    // before [btn || extraHtmlBeforeBtn] | [add-after-1.1.0]
    attachText = '', // '' | some text append copyText
    // Such as: copyright | [add-after-1.2.0]
  } = options;
  const [tokens = {}, idx = 0] = args;
  // origin writed-code
  const attachCont = (typeof attachText === 'string') ? attachText : '';
  const cont = _.strEncode(tokens[idx].content || '');
  const uuid = `j-notify-${_.generateUuid()}`;
  const originResult = render.apply(this, args);
  const langFrag = showCodeLanguage ? _.getCodeLangFragment(originResult) : '';
  const tpls = [
    '<div class="m-mdic-copy-wrapper">',
    `${langFrag}`,
    `${extraHtmlBeforeBtn}`,
    `<div class="u-mdic-copy-notify" id="${uuid}">${successText}</div>`,
    '<button ',
    'class="u-mdic-copy-btn j-mdic-copy-btn" ',
    `data-mdic-content="${cont}" `,
    `data-mdic-attach-content="${attachCont}" `,
    `data-mdic-notify-id="${uuid}" `,
    `data-mdic-notify-delay="${successTextDelay}" `,
    `data-mdic-copy-fail-text="${failText}" `,
    `onclick="${btnCode}">${btnText}</button>`,
    `${extraHtmlAfterBtn}`,
    '</div>',
  ];
  const newResult = originResult.replace(LAST_TAG, `${tpls.join('')}${LAST_TAG}`);

  return newResult;
};

/**
 * @name  copy
 * @param md        md
 * @param options   options
 */
module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block;
  const fenceRender = md.renderer.rules.fence;

  md.renderer.rules.code_block = enhance(codeBlockRender, options);
  md.renderer.rules.fence = enhance(fenceRender, options);
};
