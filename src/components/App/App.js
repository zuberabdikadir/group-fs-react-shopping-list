import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    groceryList: [],
  }

  componentDidMount(){
    console.log('Component did mount');
    this.getAllGroceries();
    
  }

  //start AllGroceries
  getAllGroceries = () => {
    axios({
      method: 'GET', 
      url: '/list'
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response.data);
      this.setState({
        groceryList: response.data
      })
      
    })
    .catch((error) => {
      alert('Something bad happening in GET');
      console.log('error', error);  
    })
  }

  }

  render() {
    return (
      <div className="App">
        <header className="banner-header">
          <h1>My Shopping List</h1>
        </header>
        <main>
          <p>Under Construction...</p>
        </main>
      </div>
    );
  }


export default App;