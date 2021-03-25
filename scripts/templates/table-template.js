(() => {
  'use strict';

  const row = (locals) => {
    const reducer = (acc, cur) => `${acc}<td>${cur}</td>`;
    const cols = locals.reduce(reducer, '');
    return `<tr>${cols}</tr>`;
  };

  const tableHead = (rowHeaders) => {
    const reducer = (acc, cur) => `${acc}<th>${cur}</th>`;
    const cols = rowHeaders.reduce(reducer, '');
    return `<thead><tr>${cols}</tr></thead>`;
  };

  const tableBody = (rows) => {
    const reducer = (acc, cur) => `${acc}${row(cur)}`;
    return `<tbody>${rows.reduce(reducer, '')}</tbody>`;
  };

  const table = (headers, rows) => {
    const thead = tableHead(headers);
    const tbody = tableBody(rows);
    return `<table>${thead}${tbody}</table>`;
  };

  const headers = ['1', '2', '3'];
  const rowA = ['Uno', 'Dos', 'Tres'];
  const rowB = ['One', 'Two', 'Three'];
  const rows = [rowA, rowB];

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = table(headers, rows);

  window.vlsm.templates.table = table;
})();
