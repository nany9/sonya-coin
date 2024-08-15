import React from 'react'
import plusbtn from '../img/sonya.jpg'
import profile from '../img/profile-circle.svg'

export default function Header() {
  var text = 'Сонякоины: '
  var balance = 0
  var incomePerClick = 1
  var price = 100
  const handleClick = () => {
    
    balance += incomePerClick
    document.getElementById("balance-caption").textContent = balance
  }

  const upgrade = () => {
    if (balance < price) {
      alert('Недостаточно сонякоинов')
    }else{
     
      balance -= price
      incomePerClick += 1

      price = price*2
      document.getElementById("upg-btn").textContent = "Улучшить (" + price + " сонякоинов)"
      document.getElementById("balance-caption").textContent = balance
    }
 
  }

  return (
    <header>
        <div className='mainDiv'>
          <div className='upper'>
            <span class='capt' id="caption">Сонякоины</span>
            <span class='balance-capt' id="balance-caption">{balance}</span>
          </div>
          <div className='item'>
            <img src={plusbtn} alt="" className='plus-button' onClick={handleClick}/>
            <button id='upg-btn' className='upgrade-btn' onClick={upgrade}>Улучшить (100 сонякоинов)</button>
          </div>
        </div>
    </header>
  )
}
