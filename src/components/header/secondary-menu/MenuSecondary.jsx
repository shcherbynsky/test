import React from 'react'

const menuTopItems = [

    {
      icon: '/icons/menu-icon-1.svg',
      title: 'Menu-item 1'
    },


    {
      icon: '/icons/menu-icon-2.svg',
      title: 'Menu-item 2'
    },


    {
      icon: '/icons/menu-icon-3.svg',
      title: 'Menu-item 3'
    },


    {
      icon: '/icons/menu-icon-4.svg',
      title: 'Menu-item 4'
    },
  ]

const MenuSecondary = ({classTitle, secondaryMenuLinkRef}) => {



    const menuElements = menuTopItems.map((item, index) => {
        return (
          <li key={index} ref={secondaryMenuLinkRef} className='menu-secondary__item'>
            <a href="!#" className='menu-secondary__link'>
              <img src={item.icon} className='menu-secondary__icon' href="#!"></img>
              <span className='menu-secondary__title' href="#!">{item.title}</span>
            </a>
          </li>
        )
      })


  return (
    <div className={`${classTitle} menu-secondary`}>
          <ul className='menu-secondary__items'>
            {menuElements}
          </ul>
        </div>
  )
}

export default MenuSecondary