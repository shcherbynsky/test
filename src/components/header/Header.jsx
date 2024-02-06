import React from 'react'
import HeaderTop from './header-top/HeaderTop'
import HeaderMain from './header-main/HeaderMain'

const Header = ({toggleTheme, theme}) => {
  return (
    <header className='header'>
        <HeaderTop toggleTheme={toggleTheme} theme={theme}/>
        <HeaderMain theme={theme}/>
    </header>
  )
}

export default Header