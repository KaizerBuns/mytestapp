import React from 'react';
import ReactDOM from 'react-dom';
import Dashblocks from './templates/dash-blocks';

const testData = [
  {
    "blockNumber": 0,
    "createdAt": "Sunday, April 23, 2018 7:58 AM",
    "minedBy": "Cesar",
    "numTxs": 167,
    "txTime": "16 seconds",
    "blockReward": "2.605 Ether"
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashblocks jsondata={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});