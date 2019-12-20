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
};
