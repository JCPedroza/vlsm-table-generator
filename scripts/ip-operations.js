(() => {
  'use strict';
  const {
    ceil,
    floor,
    log2,
    pow
  } = window.Math;
  const {
    numIsPositiveInt,
    strIsIpv4
  } = window.vlsm.validation;

  /**
   * Convert positive integer into its IPv4 string equivalent.
   * @param {Number} int Positive integer to convert.
   * @returns {String} IPv4 dot notation representation of input number.
   */
  const intToIpv4 = (int) => {
    if (!numIsPositiveInt(int)) {
      throw new Error(`Invalid positive int: ${int}`);
    }

    let ipv4 = (int % 256).toString();
    for (let i = 0; i < 3; i++) {
      int = floor(int / 256);
      ipv4 = `${int % 256}.${ipv4}`;
    }
    return ipv4;
  };

  /**
   * Convert ipv4 string into its integer number equivalent.
   * @param {String} ipv4 IPv4 dot notation string to convert.
   * @returns {Number} Integer representation of input ipv4 string.
   */
  const ipv4ToInt = (ipv4) => {
    if (!strIsIpv4(ipv4)) {
      throw new Error(`Invalid ipv4: ${ipv4}`);
    }

    return ipv4
      .split('.')
      .map((str) => parseInt(str))
      .reverse()
      .reduce((acc, val, idx) => acc + (val * pow(256, idx)));
  };

  /**
   * Get the mask prefix for the given number of hosts.
   * @param {Number} nHosts Number of hosts.
   * @returns {Number} Mask prefix.
   */
  const nHostsToPrefix = (nHosts) => {
    if (!numIsPositiveInt(nHosts)) {
      throw new Error(`Invalid positive int: ${nHosts}`);
    }
    return 32 - ceil(log2(nHosts + 2));
  };

  window.vlsm.ipOperations = {
    intToIpv4,
    ipv4ToInt,
    nHostsToPrefix
  };
})();
