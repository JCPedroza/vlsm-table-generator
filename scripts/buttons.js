(() => {
  'use strict';

  const subnetList = document.getElementById('subnet-list');
  const removeSubnetButton = document.getElementById('button-minus');
  const addSubnetButton = document.getElementById('button-plus');
  const subnets = [document.getElementById('subnet-details-0')];

  const removeSubnet = () => {
    if (subnets.length > 1) {
      subnetList.removeChild(subnets.pop());
    }
  };

  const addSubnet = () => {
    const newIndex = subnets.length;
    const prevIndex = newIndex - 1;
    const [prevSubnet] = subnets.slice(-1);
    const newSubnet = prevSubnet.cloneNode(true);

    const newSubnetNum = newSubnet.querySelector(`#subnet-number-${prevIndex}`);
    const nameInput = newSubnet.querySelector(`#name-net-${prevIndex}`);
    const nameLabel = newSubnet.querySelector(`#label-name-net-${prevIndex}`);
    const sizeInput = newSubnet.querySelector(`#size-net-${prevIndex}`);
    const sizeLabel = newSubnet.querySelector(`#label-size-net-${prevIndex}`);

    newSubnetNum.id = `subnet-number-${newIndex}`;
    newSubnet.id = `subnet-details-${newIndex}`;
    nameInput.id = `name-net-${newIndex}`;
    nameLabel.id = `label-name-net-${newIndex}`;
    sizeInput.id = `size-net-${newIndex}`;
    sizeLabel.id = `label-size-net-${newIndex}`;

    newSubnetNum.textContent = `#${newIndex + 1}`;
    nameLabel.setAttribute('for', nameInput.id);
    sizeLabel.setAttribute('for', sizeInput.id);

    subnets.push(newSubnet);
    subnetList.appendChild(newSubnet);
  };

  removeSubnetButton.onclick = removeSubnet;
  addSubnetButton.onclick = addSubnet;
})();
