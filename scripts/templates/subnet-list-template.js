(() => {
  'use strict';
  const { parseHtmlStr } = window.vlsm.templates.utils;

  const targets = {
    NAME: 'name',
    SIZE: 'size'
  };

  const buildInput = (idInt, target) => {
    const type = 'type="text"';
    const idStr = `id="${target}-net-${idInt}"`;
    const classStr = `class="float-input ${target}-net"`;
    const placeholder = `placeholder="${target}"`;
    const inputAttr = `${type} ${idStr} ${classStr} ${placeholder}`;
    return `<input ${inputAttr}>`;
  };

  const buildLabel = (idInt, target) => {
    const forStr = `for="${target}-net-${idInt}"`;
    const idStr = `id="label-${target}-net-${idInt}"`;
    const classStr = 'class="float-label"';
    const dataContent = `data-content="${target}"`;
    const labelAttr = `${forStr} ${idStr} ${classStr} ${dataContent}`;
    const span = `<span class="float-hidden">${target}</span>`;
    return `<label ${labelAttr}>${span}</label>`;
  };

  const buildField = (idInt, target) => {
    const input = buildInput(idInt, target);
    const label = buildLabel(idInt, target);
    const floatField = `<div class="float-field">${input}${label}</div>`;
    return `<div class="form-field">${floatField}</div>`;
  };

  const buildSubnet = (idInt) => {
    const name = buildField(idInt, targets.NAME);
    const size = buildField(idInt, targets.SIZE);
    const spanAttr = `ìd="subnet-number-${idInt}" class="subnet-number"`;
    const span = `<span ${spanAttr}>#${idInt + 1}</span>`;
    const divAttr = `id="subnet-details-${idInt}" class="subnet-details"`;
    return parseHtmlStr(`<div ${divAttr}>${span}${name}${size}</div>`);
  };

  window.vlsm.templates.subnetList = buildSubnet;
})();
