(() => {
  'use strict';
  const { parseHtmlStr } = window.vlsm.templates.utils;

  const buildTableRow = (locals) => {
    const reducer = (acc, cur) => `${acc}<td>${cur}</td>`;
    const cols = locals.reduce(reducer, '');
    return `<tr>${cols}</tr>`;
  };

  const buildTableHead = (rowHeaders) => {
    const reducer = (acc, cur) => `${acc}<th>${cur}</th>`;
    const cols = rowHeaders.reduce(reducer, '');
    return `<thead><tr>${cols}</tr></thead>`;
  };

  const buildTableBody = (rows) => {
    const reducer = (acc, cur) => `${acc}${buildTableRow(cur)}`;
    return `<tbody>${rows.reduce(reducer, '')}</tbody>`;
  };

  const buildTable = (headers, rows) => {
    const thead = buildTableHead(headers);
    const tbody = buildTableBody(rows);
    return parseHtmlStr(`<table>${thead}${tbody}</table>`);
  };

  window.vlsm.templates.table = buildTable;
})();
