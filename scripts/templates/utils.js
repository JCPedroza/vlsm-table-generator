(() => {
  'use strict';
  const showCols = ['name', 'size', 'max', 'network', 'first', 'last',
    'broadcast'];

  const parseHtmlStr = (htmlStr) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlStr;
    return wrapper.firstChild;
  };

  const infoToRow = (info) => {
    return showCols.map((colName) => info[colName]);
  };

  window.vlsm.templates.utils = {
    parseHtmlStr,
    infoToRow,
    showCols
  };
})();
