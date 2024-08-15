import React from 'react';
import './App.css';
import Header from './components/header1';
import { render } from '@testing-library/react';
import Items from './components/Items';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул',
          url: 'https://www.stolberi.ru/upload/iblock/f25/9f19255d_289b_11ea_8086_fcaa145d5838_ffce8608_ed05_11ea_f38b_005056bdce03.jpg'
        },
        {
          id: 2,
          title: 'Стол',
          url: 'https://nyagan.unik-mebel.ru/upload/resize_cache/webp/upload/iblock/705/7050c3023b11f23a6f8ef9e3a02863dc.webp'
        },
        {
          id: 3,
          title: 'Ноутбук',
          url: 'https://img.mvideo.ru/Pdb/30070346b.jpg'
        }
    ]
    }
    
  }

  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Items items={this.state.items}/>
      </div>
    )
  }
}
export default App;
