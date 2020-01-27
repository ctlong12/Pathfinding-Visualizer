import React from 'react';

export const Navbar = () => {
  return (
    <nav class='navbar bg-dark'>
      <h1>
        <a href='dashboard.html'>
          {' '}
          <i class='fas fa-code'></i> Pathfinder{' '}
        </a>
      </h1>
      <button>Visulize!</button>
      <ul>
        <li>
          <a href='tutorial.html'></a>Algorthims
        </li>
        <li>
          <a href='tutorial.html'></a>Tutorial
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
