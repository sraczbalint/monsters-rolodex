
import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';


class App extends Component {
 constructor(){
    super();

    this.state = {
      monsters: [],
      SearchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  render() {
    const {monsters,SearchField } = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      {
        return monsters.name.toLowerCase().includes(SearchField.toLowerCase());
      }
      );
    return(
      <div classname='App'>
        <h1>Monsters Rolodex</h1> 
        <Searchbox 
          placeholder='filter monsters'
          handleChange={e => this.setState({ SearchField: e.target.value })
        } />
        < CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}
    



export default App;
