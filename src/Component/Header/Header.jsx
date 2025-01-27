import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white p-4">
      <nav className="flex items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">student registration</Link>
        </h1>
        <ul className="flex space-x-4 mx-auto">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>


          <li>
            <Link to="/datatable" className="hover:underline">Data Table</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
