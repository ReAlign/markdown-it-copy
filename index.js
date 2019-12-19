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
    btnText = 'Copy', // 'Copy' | button text
    extraHtmlBeforeBtn = '', // '' | a html-fragment before <button>
    extraHtmlAfterBtn = '', // '' | a html-fragment after <button>
  } = options;
  const [tokens = {}, idx = 0] = args;
  // origin writed-code
  const cont = tokens[idx].content || '';
  const copyTag = `
    <div class="m-mdic-wrapper">
      ${extraHtmlBeforeBtn}
      <button
        class="u-mdic-btn"
        data-mdiccont="${cont}"
        onclick="window.MDIC.btnClick(this)">
        ${btnText}
      </button>
      ${extraHtmlAfterBtn}
    </div>
  `;

  const originResult = render.apply(this, args);
  const newResult = originResult.replace(LAST_TAG, `${copyTag}${LAST_TAG}`);

  return newResult;
};

/**
 * @name  copy
 * @param md        md
 * @param options   options
 */
module.exports = (md = {}, options = {}) => {
  const codeBlockRender = md.renderer.rules.code_block;
  const fenceRender = md.renderer.rules.code_block;

  md.renderer.rules.code_block = enhance(codeBlockRender, options);
  md.renderer.rules.fence = enhance(fenceRender, options);
};
