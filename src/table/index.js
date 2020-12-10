import React from "react";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0])
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        {/* <tr>{data[0] && columns.map((heading) => <th>{heading.toString().toUpperCase()}</th>)}</tr> */}
        <tr>
          <th>Id</th>
          <th>List Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => 
        <tr>
          {
            columns.map(column => <td>{row[column]}</td>)
          }
         </tr>)}
        </tbody>
    </table>
  );
}