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
            return <th>{item.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableRowData.map(item => {
          return <tr>{keyNameArray.map(keyName => <td>{item[keyName]}</td>)}</tr>;
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
