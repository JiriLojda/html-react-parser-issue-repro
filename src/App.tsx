import React from 'react';
import logo from './logo.svg';
import parseHTML, { DOMNode, Element } from 'html-react-parser';
import './App.css';

const replacer = (domNode: DOMNode) => {
  console.log('is instance of?: ', domNode instanceof Element);
  if (domNode instanceof Element && domNode.attribs['id'] === 'remove') {
    console.log('replacing...');
    return <></>;
  }
  return undefined;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {parseHTML('<div>stay and remove -> <b id="remove">This should be removed</b></div>', {
          replace: replacer,
        })}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
