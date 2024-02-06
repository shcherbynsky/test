import React from 'react'
import MainContent from '../main-content/MainContent'
import MainAside from '../main-aside/MainAside'

const MainBody = () => {
  return (
    <div className='main-body'>
      <div className="main-body__container">
        <MainContent />
        <MainAside />
      </div>

    </div>
  )
}

export default MainBody