import React from 'react';
import ReactDOM from 'react-dom';
import Dashblocks from './templates/dash-transactions';

const testData = [
  {
    "txNumber": "0x5ad788931366ae3b9bd4e50c",
    "fromAddress": "0x1adecda3-6f7e-4301-aed2-78633d0f1534",
    "toAddress": "0xa5b96a31-7315-4ee1-97ba-74d79b6fa19f",
    "createdAt": "Monday, April 23, 2018 8:50 PM",
    "amount": "2.205 Ether"
  }
 ];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashblocks jsondata={testData}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});