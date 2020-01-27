import React, { Fragment } from 'react';
import './App.css';
import Navbar from '../src/components/layout/Navbar';
import PathfinderView from './PathfinderView/PathfinderView';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <Navbar></Navbar>
      </Fragment>
      <PathfinderView></PathfinderView>
    </div>
  );
}

export default App;
