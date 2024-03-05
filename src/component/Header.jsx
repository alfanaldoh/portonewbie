import React from 'react'
import styled from 'styled-components'
import containerCSS from '../component/Component.module.css'
import logo from '../assets/text.png'

const Header = () => {
  return (
    <div className={containerCSS.gridSatu}>
      <div className={containerCSS.navlist}>
        <div className={containerCSS.navlogo}>
          <img src={logo} alt="" />
        </div>
        <div className={containerCSS.navitems}>
          <h3>Home</h3>
          <h3>My Project</h3>
          <h3>My Skill</h3>
        </div>
      </div>
      </div>
  )
}

export default Header