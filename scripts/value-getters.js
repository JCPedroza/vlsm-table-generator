(() => {
  'use strict';
  const chbxName = document.getElementById('checkbox-name');
  const chbxSize = document.getElementById('checkbox-size');
  const chbxMax = document.getElementById('checkbox-max');
  const chbxNetwork = document.getElementById('checkbox-network');
  const chbxFirst = document.getElementById('checkbox-first');
  const chbxLast = document.getElementById('checkbox-last');
  const chbxBroadcast = document.getElementById('checkbox-broadcast');
  const chbxMask = document.getElementById('checkbox-mask');
  const chbxPrefix = document.getElementById('checkbox-prefix');
  const chbxNext = document.getElementById('checkbox-next');

  const checkBoxes = [chbxName, chbxSize, chbxMax, chbxNetwork, chbxFirst,
    chbxLast, chbxBroadcast, chbxMask, chbxPrefix, chbxNext];

  const getCheckboxTarget = (chbx) => {
    return chbx
      .id
      .split('-')
      .pop();
  };

  const getCheckedCols = () => {
    return checkBoxes
      .filter((chbx) => chbx.checked)
      .map((chbx) => getCheckboxTarget(chbx));
  };

  window.vlsm.valueGetters = {
    getCheckedCols
  };
})();
