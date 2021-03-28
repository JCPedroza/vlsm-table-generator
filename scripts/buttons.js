(() => {
  'use strict';
  const buildSubnet = window.vlsm.templates.subnetList;
  const { nHostsToPrefix } = window.vlsm.ipOperations;

  const generateButton = document.getElementById('button-generate');
  const removeSubnetButton = document.getElementById('button-minus');
  const addSubnetButton = document.getElementById('button-plus');
  const subnetList = document.getElementById('subnet-list');

  const subnets = [];

  const removeSubnet = () => {
    if (subnets.length > 1) {
      subnetList.removeChild(subnets.pop());
    }
  };

  const addSubnet = () => {
    const newSubnet = buildSubnet(subnets.length);
    subnets.push(newSubnet);
    subnetList.appendChild(newSubnet);
  };

  const getSubnetInfo = (netElement) => {
    const [nameElement, sizeElement] = netElement.querySelectorAll('input');
    return {
      name: nameElement.value,
      size: parseInt(sizeElement.value)
    };
  };

  const generateTable = () => {
    const netInfo = subnets.map((net) => getSubnetInfo(net));
    netInfo.sort((a, b) => a.size - b.size);
    netInfo.forEach((net) => {
      console.log(net.size, nHostsToPrefix(net.size));
      console.log();
    });
  };

  removeSubnetButton.onclick = removeSubnet;
  addSubnetButton.onclick = addSubnet;
  generateButton.onclick = generateTable;

  window.vlsm.buttons = {
    addSubnet
  };
})();
