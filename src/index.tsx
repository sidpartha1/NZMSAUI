import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as ReactAI  from 'react-appinsights';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
ReactAI.init({ instrumentationKey: "79cfa65a-9efd-4484-8294-bdf702bec94d" });
ReactAI.setAppContext({urlReferrer:document.referrer});
