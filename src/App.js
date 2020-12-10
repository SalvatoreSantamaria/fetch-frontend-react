import React, { useState, useEffect } from 'react'
import Table from "./table"
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
        
        var aListId = a.listId
        var bListId = b.listId
        var aName = a.name
        var bName = b.name
        
          if ( aListId == bListId ) {
            return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
          } else {
            return (aListId < bListId) ? -1 : 1
          }
      })
      setData(filteredData)
    })
  }, [])


  function search(rows) {
    return rows.filter(row => row.id.toString().toLowerCase().indexOf(q) > -1)
  }

  return ( 
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
      </div>
      <div><Table data={search(data)}/></div>
      {/* <div><Table data={data}/></div> */}
    </div>
  )
}

