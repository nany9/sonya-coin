import React from 'react';
import './App.css';
import Header from './components/header';
import { render } from '@testing-library/react';
import Items from './components/Items';

class App extends React.Component{
  

  render() {
    return (
    
      <div className='wrapper'>
        <Header/>
      </div>
    )
  }
}
export default App;
