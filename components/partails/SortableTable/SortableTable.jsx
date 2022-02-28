import React, { useEffect } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

const SortableTable = ({ data, columns }) => {

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
        },
        useFilters,
        useSortBy,
    )

    
 return (
    // apply the table props
    <>
    <table {...getTableProps()}>
      <thead>
        {// Loop over the header rows
        headerGroups.map(headerGroup => (
          // Apply the header row props
          <tr {...headerGroup.getHeaderGroupProps()}>
            { headerGroup.headers.map(column => (
              <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                { column.render('Header')}
                <div>
                {column.isSorted
                    ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                    : ''}
                </div>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
        rows.map(row => {
          // Prepare the row for display
          prepareRow(row)
          return (
            // Apply the row props
            <tr {...row.getRowProps()}>
              {// Loop over the rows cells
              row.cells.map(cell => {
                // Apply the cell props
                return (
                  <td {...cell.getCellProps()}>
                    {// Render the cell contents
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default SortableTable;