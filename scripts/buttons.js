(() => {
  'use strict';
  const vlsmTable = window.vlsm.vlsmTable;
  const buildSubnet = window.vlsm.templates.subnetList;
  const buildTable = window.vlsm.templates.table;
  const { infoToRow } = window.vlsm.templates.utils;
  const { getCheckedCols } = window.vlsm.valueGetters;

  const generateButton = document.getElementById('button-generate');
  const removeSubnetButton = document.getElementById('button-minus');
  const addSubnetButton = document.getElementById('button-plus');
  const subnetList = document.getElementById('subnet-list');
  const tableContainer = document.getElementById('table-container');

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
    const rootIp = document.getElementById('ip-block').value;
    const netInfo = subnets.map((net) => getSubnetInfo(net));
    netInfo.sort((a, b) => b.size - a.size);
    const tableBody = vlsmTable(rootIp, netInfo);
    const rowInfo = tableBody.map((info) => infoToRow(info));
    const table = buildTable(getCheckedCols(), rowInfo);

    if (tableContainer.firstChild) {
      tableContainer.removeChild(tableContainer.firstChild);
    }
    tableContainer.appendChild(table);
  };

  removeSubnetButton.onclick = removeSubnet;
  addSubnetButton.onclick = addSubnet;
  generateButton.onclick = generateTable;

  window.vlsm.buttons = {
    addSubnet
  };
})();
