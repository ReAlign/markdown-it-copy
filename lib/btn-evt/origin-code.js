(function (btn) {
  const MDIC = {
    copy(text = '') {
      return new Promise((resolve, reject) => {
        const textNode = document.createElement('textarea');
        textNode.value = text;
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
      MDIC.copy(ds.mdicContent)
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
