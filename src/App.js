import React, { useState } from 'react';
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

  const [output, setOutput] = useState("");
  const [input, setInput] = useState("0");
  
  const operation = (value) => {

    if (value === "=" && input === "0" && output === "") {
      return;
    }

    if (value === "AC") {  // clear the component state
      setOutput("");
      setInput("0");
    };

    if (value === "." && /[x]|[/]|[-]|[+]/.test(input)) { // the period goes only after one of the digits
      setInput(input);
      return;
    };

    if (value === "=" && !/[=]/g.test(output) && !/[x]$|[/]$|[-]$|[+]$|[\.]$/.test(output)) {  // evaluate the typed expression
      let result = eval(output.replace(/[x]/g, "*"));  
      setInput(result);
      setOutput(output + "=" + result);
    };

    if (value != "AC" && value !== "=") {

      var m = /[x]|[/]|[-]|[+]/.test(value) ? value :

      input === "0" && value === "." ? input + value : 

      input === "0" ? value :

      /\./g.test(input) && value === "." ? input : // if a period was already used then don't set it

      /[x]|[/]|[-]|[+]/.test(input) ? value : input + value;

      setInput(m);
      setOutput(
        /[\.]/.test(input) && value === "." ? output :

        /[0-9]/.test(value) && /0$/.test(output) ? output + value :

        output === "" && value === "." ? "0." :

        /[=]/g.test(output) ? input + value :

        /^[x]|^[/]|^[-]|^[+]/.test(output) && /[0-9]/.test(m) ? m :

        /\.$|[x]$|[/]$|[-]$|[+]$/.test(output) && /[x]|[/]|[-]|[+]/.test(m) ? output.replace(/\.$|[x]$|[/]$|[-]$|[+]$/, value) :

        /\.$|[0-9]+\.[0-9]+$/.test(output) && value === "." ? output :

        /[0-9]/.test(m) ? output + value :

        /[x]$|[/]$|[-]$|[+]$/.test(output) ? output :

        /[x]|[/]|[-]|[+]/.test(m) ? output + value : output
      );
    };
    
  }

  return (
    <div className="App">
      <div className="calc-body">
      <div id="display">
        <div className="subscreen" id="output">{output}</div>
        <div className="subscreen" id="input">{input}</div>
      </div>
        <div className="grid">{buttons.map((el) => <Button id={el.idName} operation={operation} key={el.idName} name={el.name} />)}</div>
      </div>
    </div>
  );
}

export default App;
