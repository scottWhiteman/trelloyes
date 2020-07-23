import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    state: {
      lists: [],
      allCards: {},
    }
  };

  handleAddRandomCard = () => {
    console.log("Random card");
  }

  handleDeleteCard = () => {
    console.log("Delete");
  }

  render() {
    const { state } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => state.allCards[id])}
              
              onAddCard={this.handleAddRandomCard}
              onDeleteItem={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
