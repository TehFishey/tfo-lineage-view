import React from 'react';
import ReactDOM from 'react-dom';
import Pedigree from './components/PedigreeRoot';
import * as serviceWorker from './serviceWorker';

fetch(`creature.json`)
.then((r) => r.json())
.then((data) =>{
    ReactDOM.render(
      <React.StrictMode>
        <Pedigree data={data}/>
      </React.StrictMode>, 
      document.getElementById('pedigree-root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
