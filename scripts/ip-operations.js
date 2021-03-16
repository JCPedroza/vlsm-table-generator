(() => {
  'use strict';
  const { isIpv4 } = window.vlsm.validation;
  const { pow } = Math;

  const nHostsToPrefix = (nHosts) => {
    return 32 - Math.ceil(Math.log2(nHosts + 2));
  };

  const ipv4ToInt = (ipv4) => {
    if (!isIpv4(ipv4)) throw new Error(`Invalid ipv4: ${ipv4}`);

    return ipv4
      .split('.')
      .map((str) => parseInt(str))
      .reverse()
      .reduce((acc, val, idx) => acc + (val * pow(256, idx)));
  };

  window.vlsm.ipOperations = {
    nHostsToPrefix,
    ipv4ToInt
  };
})();
