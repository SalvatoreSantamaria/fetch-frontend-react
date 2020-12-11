import React, { useState, useEffect } from 'react'
import Table from "./table"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {

  const [data, setData] = useState([]); 
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(response => response.json())
    .then(json => {
      const filteredData = json.filter((d) => {
        return (d.name !== null && d.name !== '')
      })
      filteredData.sort(function(a,b) { 
        if ( a.listId == b.listId ) {
          return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        } else {
          return (a.listId < b.listId) ? -1 : 1
        }
      })
      setData(filteredData)
    })
  }, [])

  function search(rows) {
    return rows.filter(row => row.id.toString().toLowerCase().indexOf(q) > -1)
  }

  return ( 
    <Container fluid="md">
      <Row>
        <Col>
          <h2>Fetch Rewards Coding Exercise - Front End By <a href="http://www.salvatoresantamaria.com" target="blank">Salvatore Santamaria</a></h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search By Id"
              aria-label="Search By Id"
              value={q} onChange={(e) => setQ(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table data={search(data)}/>
        </Col>
      </Row>
    </Container>
  )
}
