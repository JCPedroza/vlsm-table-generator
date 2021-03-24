(() => {
  'use strict';

  const rowHeader = (locals) => {
    const reducer = (acc, cur) => `${acc}<th>${cur}</th>`;
    const cols = locals.reduce(reducer, '');
    return `<tr>${cols}</tr>`;
  };

  const row = (locals) => {
    const reducer = (acc, cur) => `${acc}<td>${cur}</td>`;
    const cols = locals.reduce(reducer, '');
    return `<tr>${cols}</tr>`;
  };

  const table = (headers, rows) => {
    const reducer = (acc, cur) => `${acc}${row(cur)}`;
    const tableHeaders = rowHeader(headers);
    const tableBody = rows.reduce(reducer, tableHeaders);
    return `<table>${tableBody}</table>`;
  };

  const headers = ['1', '2', '3'];
  const rowA = ['Uno', 'Dos', 'Tres'];
  const rowB = ['One', 'Two', 'Three'];
  const rows = [rowA, rowB];

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = table(headers, rows);

  window.vlsm.templates.table = table;
})();
