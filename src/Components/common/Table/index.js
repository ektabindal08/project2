import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
const Table = props => {
  const { tableColumns, tableRowData, className, id } = props;
  const keyNameArray = [];
  return (
    <table id={id} className={`table ${className}`}>
      <thead>
        <tr>
          {tableColumns.map(item => {
            keyNameArray.push(item.key);
            return <th key={item.key}>{item.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableRowData.map((item,index) => {
          return <tr key={`table-row-${index}`}>{keyNameArray.map(keyName => <td key={item[keyName]}>{item[keyName]}</td>)}</tr>;
        })}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  tableColumns: PropTypes.array,
  tableRowData: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.string
};

Table.defaultProps = {
  tableColumns: [],
  tableRowData: [],
  className: '',
  id: 'id'
};
export default Table;
