import React from "react";
import Table from "react-bootstrap/Table"

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>List Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => 
        <tr>
          { columns.map(column => <td>{row[column]}</td>) }
        </tr>)}
      </tbody>
    </Table>
  );
}
