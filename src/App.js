import React from 'react';
import './App.css';
import Table from './Table';
import Checkbox from './Checkbox';

// const data = [
//     ["Allen", 35],
//     ["bo", 35],
//     ["charlie", 35],
// ]
// WOULD NOT ALLOW THE REFORMATTING OF NAME AND AGE ( NAME ON THE RIGHT SIDE OF AGE )

// keys for telling react which element matches with the virtual dom (?)

// THIS ALLOWS FOR MORE MANIPULABLE LAYOUT OF YOUR DATA
const data = [
    {
        name: "matt",
        age: 25
    },
    {
        name: "mandy",
        age: 29
    },
    {
        name: "nemo",
        age: 2
    }
];

const headers = [
    {
        label: 'Select',
        id: 'select',
        Component: Checkbox,
    },
    {
        label: 'Name',
        id: 'name' // print values from data that have a value of name so you can change the order of this headers and it does not change anything as it is by key 'id'
    },
    {
        label: 'Age',
        id: 'age'
    }
];

function App() {
  return (
    <div className="App">
      <Table data={data} headers={headers}/>
    </div>
  );
}

export default App;


/*
NETFLIX CARD EXAMPLE
the row is what gives the functionality while the cellRenderer gives the type of movie card
* <Row titles = {title1} cellRenderer={MiniCell}/>
* <Row titles = {title2} cellRenderer={TallCell}/>
*
* */
