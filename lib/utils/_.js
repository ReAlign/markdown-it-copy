const x = {
  getCodeLang(str = '') {
    const reg = /<code class="language-([a-z]+)/;
    reg.test(str);
    return RegExp.$1 || '';
  },
  getFragment(str = '') {
    return str ? `<span class="u-mdic-copy-code_lang">${str}</span>` : '';
  },
};
module.exports = {
  // generate Unique id
  generateUuid() {
    return `${+Date.now()}-${parseInt(Math.random() * 100000)}`;
  },
  strEncode(str = '') {
    if (!str || str.length === 0) {
      return '';
    }

    return str
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;');
  },
  getCodeLangFragment(oriStr = '') {
    return x.getFragment(x.getCodeLang(oriStr));
  },
};
