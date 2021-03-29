(() => {
  'use strict';
  const {
    intToIpv4,
    ipv4ToInt,
    nHostsToPrefix,
    prefixSize,
    prefixToMask
  } = window.vlsm.ipOperations;

  const rowValues = (name, size, ipv4) => {
    const prefix = nHostsToPrefix(size);
    const network = ipv4ToInt(ipv4);
    const totalSize = prefixSize(prefix);
    const max = totalSize - 2;
    const broadcast = network + totalSize - 1;
    const first = network + 1;
    const last = broadcast - 1;
    const next = broadcast + 1;
    const mask = prefixToMask(prefix);

    return {
      name,
      size,
      network: ipv4,
      broadcast: intToIpv4(broadcast),
      first: intToIpv4(first),
      last: intToIpv4(last),
      next: intToIpv4(next),
      mask,
      prefix,
      max
    };
  };

  const tableValues = (rootIpv4, subnets) => {
    const rows = [];
    let currentIp = rootIpv4;

    for (let i = 0; i < subnets.length; i++) {
      const newRow = rowValues(subnets[i].name, subnets[i].size, currentIp);
      currentIp = newRow.next;
      rows.push(newRow);
    }

    return rows;
  };

  window.vlsm.vlsmTable = tableValues;
})();
