import React from "react";
import './table.css'

const Table = ({data , activeFields , customClassName = ''}) => {
  if(!data || (data && data.length === 0)) return ;
  return (
    <table className={`table-container ${customClassName}`}>
      <thead>
      <tr>
        <th>S.No</th>
        {activeFields && activeFields.length && activeFields.map((row, key) => {
          return <th key={key}>{row.label}</th>
        })}
      </tr></thead>
      <tbody>
        {data && data.length > 0 && data.map((row, key) => {
          return <tr key={key}>
            <td key={key}>{key + 1}</td>
            {
              activeFields.map((cell, k) => {
                return <td key={k}>{row[cell.field]}</td>
              })
            }
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default Table