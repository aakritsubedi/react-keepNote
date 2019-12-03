import React from 'react';

import Nav from './components/Nav/Nav';
import Table from './components/Table/Table';


import './App.css';

function App() {
  let navItems=[
    {
      title: 'About Us',
      link: '#'
    },
    {
      title: 'Contact Us',
      link: '#'
    },
    {
      title: 'Location',
      link: '#'
    }
  ];
  return (
    <div className="app-container">
      <Nav companyName='Aakrit Subedi' items={navItems} />
      <Table tblTitle='Lf Employe'/>
    </div>
  );
}

export default App;
