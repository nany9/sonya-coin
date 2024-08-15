import React from 'react'
import plusbtn from '../img/add-square.svg'
import profile from '../img/profile-circle.svg'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Делиська</span>
            <ul className='nav'>
                <li></li>
               
            </ul>

            
            <img src={plusbtn} alt="" className='plus-button'/>
            <img src={profile} className='pf-button'></img>

        </div>
    </header>
  )
}
