import React from 'react';
import './App.css';
import Button from './Button';

function App() {

  const buttons = [
    {
    name: "AC",
    idName: "clear"
    },

    {
      name: "/",
      idName: "divide"
    },
    
    {
      name: "x",
      idName: "multiply"
    },

    {
      name: "1",
      idName: "one"
    },

    {
      name: "2",
      idName: "two"
    },
    
    {
      name: "3",
      idName: "three"
    },

    {
      name: "-",
      idName: "subtract"
    },

    {
      name: "4",
      idName: "four"
    },

    {
      name: "5",
      idName: "five"
    },

    {
      name: "6",
      idName: "six"
    },

    {
      name: "+",
      idName: "add"
    },

    {
      name: "7",
      idName: "seven"
    },

    {
      name: "8",
      idName: "eight"
    },

    {
      name: "9",
      idName: "nine"
    },

    {
      name: "=",
      idName: "equals"
    },

    {
      name: "0",
      idName: "zero"
    },

    {
      name: ".",
      idName: "decimal"
    }
    ];

  return (
    <div className="App">
      <div class="calc-body">
      <div id="display">
        <div class="subscreen" id="output">asdaf</div>
        <div class="subscreen" id="input">asdfd</div>
      </div>
        <div class="grid">{buttons.map((el) => <Button id={el.idName} name={el.name} />)}</div>
      </div>
    </div>
  );
}

export default App;
