import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false, 
    }
  }

  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json'


    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
    })
  }

  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div className="App">
           Data has been loaded

            <ul>
              {items.map((item) => (
                <li key={item.id}>ID: {item.id} | List ID: {item.listId} | Name: {item.name}</li>
              ))}
            </ul>
        </div>
      );
    }


  }

}





export default App;
