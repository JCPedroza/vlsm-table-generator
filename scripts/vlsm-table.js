(() => {
  'use strict';
  const {
    intToIpv4,
    ipv4ToInt,
    prefixSize,
    prefixToMask
  } = window.vlsm.ipOperations;

  const rowValues = (ipv4, prefix) => {
    const network = ipv4ToInt(ipv4);
    const totalSize = prefixSize(prefix);
    const maxHosts = totalSize - 2;
    const broadcast = network + totalSize - 1;
    const first = network + 1;
    const last = broadcast - 1;
    const mask = prefixToMask(prefix);

    return {
      network: ipv4,
      broadcast: intToIpv4(broadcast),
      first: intToIpv4(first),
      last: intToIpv4(last),
      mask,
      prefix,
      maxHosts
    };
  };

  const tableValues = (rootIpv4, ...subnets) => {

  };
})();
