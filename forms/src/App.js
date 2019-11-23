import React, { Fragment } from 'react';
import './App.css';

import { Button } from 'react-bootstrap'

function App() {
  return (
    <Fragment>
      <div className="container">
      <div className="form-group">
        <label>Name:</label>
        <input type="text"
              className="form-control"
              id="inputName"
              aria-descibedby="inputName"
              placeholder="Enter Name"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      <hr />
      
    </Fragment>
    );
  }

export default App;
