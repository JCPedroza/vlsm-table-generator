(() => {
  'use strict';
  const {
    isInteger
  } = window.Number;

  const numIsPositiveInt = (num) => {
    return num >= 0 && isInteger(num);
  };

  const strIsPositiveInt = (str) => {
    const regExp = /^\+?(0|[1-9]\d*)$/;
    return regExp.test(str);
  };

  const strIsIpv4 = (str) => {
    // Tests 010.010.010.010 as valid
    const regExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regExp.test(str);
  };

  const strIsIPv4Prefix = (str) => {
    const hasSlash = str[0] === '/';
    const num = parseInt(str.slice(1));
    const inRange = num >= 8 && num <= 31;
    return hasSlash && inRange;
  };

  window.vlsm.validation = {
    numIsPositiveInt,
    strIsPositiveInt,
    strIsIpv4,
    strIsIPv4Prefix
  };
})();
