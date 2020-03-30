(function (btn) {
  const MDIC = {
    copy(text = '', attachText = '') {
      return new Promise((resolve, reject) => {
        const textNode = document.createElement('textarea');
        const aText = attachText ? `\n\n${attachText}` : attachText;
        textNode.value = `${text}${aText}`;
        document.body.appendChild(textNode);
        textNode.select();
        try {
          const successful = document.execCommand('copy');
          document.body.removeChild(textNode);
          if (successful) {
            resolve();
          } else {
            reject();
          }
        } catch (err) {
          document.body.removeChild(textNode);
          reject();
        }
      });
    },
    btnClick(_btn) {
      const ds = (_btn && _btn.dataset) ? _btn.dataset : {};
      const nid = ds.mdicNotifyId;
      const nDom = document.getElementById(nid);
      const nDelay = ds.mdicNotifyDelay;
      const copyFailText = ds.mdicCopyFailText;
      MDIC.copy(ds.mdicContent, ds.mdicAttachContent)
        .then(() => {
          nDom.style.display = 'block';
          setTimeout(() => {
            nDom.style.display = 'none';
          }, nDelay);
        })
        .catch(() => {
          alert(copyFailText);
        });
    },
  };
  MDIC.btnClick(btn);
}(this));
