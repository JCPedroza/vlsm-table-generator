(() => {
  'use strict';

  const parseHtmlStr = (htmlStr) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlStr;
    return wrapper.firstChild;
  };

  const infoToRow = (info) => {
    return [info.name, info.size, info.network, info.first, info.last,
      info.broadcast, info.next];
  };

  window.vlsm.templates.utils = {
    parseHtmlStr,
    infoToRow
  };
})();
