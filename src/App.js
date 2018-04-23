import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import blockdata from './data/blocks.json';
import transdata from './data/transactions.json';

var Dashmarketcap = require('./templates/dash-marketcap.js');
var Dashgraph = require('./templates/dash-graph.js');
var Dashblocks = require('./templates/dash-blocks.js');
var Dashtransactions = require('./templates/dash-transactions.js');

 
function App() {
  return (
    <div>
      <div className="row">
        <Dashmarketcap />
        <Dashgraph />
      </div>
      <div className="row">
        <Dashblocks jsondata={blockdata}/>
        <Dashtransactions jsondata={transdata} />
      </div>
    </div>
  );
}

export default App;