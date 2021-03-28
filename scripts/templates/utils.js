(() => {
  'use strict';

  const parseHtmlStr = (htmlStr) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlStr;
    return wrapper.firstChild;
  };

  window.vlsm.templates.utils = {
    parseHtmlStr
  };
})();
