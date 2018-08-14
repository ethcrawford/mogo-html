import React from 'react';
import ReactDOM from 'react-dom';
import './modules/bootstrap/bootstrap.css';
import './modules/font-awesome/font-awesome.css';
import './index.css';
import './modules/visually-hidden/visually-hidden.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
if (module.hot) {
  module.hot.accept();
}
