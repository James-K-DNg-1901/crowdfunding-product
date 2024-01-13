import React from 'react'
import logo from '../../assets/logo.svg'
import menu from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close-menu.svg'

class Header extends React.Component {

  state = {
    open: menu,
    close: close
  }

  clickHandle = () => {
    document.getElementById('menu').classList.toggle('max-md:right-10')
  }

  render() {
    return (
      <header className='w-full h-72 sm:h-96 bg-mobile-hero md:bg-desktop-hero bg-cover bg-no-repeat absolute top-0'>
        <div className='flex justify-between px-12 md:px-36 pt-14 relativezs z-0'>
          <img src={logo} alt="logo-img" />
          <div id='menu' className='w-60 text-white flex justify-between max-md:flex-col max-md:items-center max-md:gap-3
          max-md:absolute max-md:top-24 max-md:-right-60 max-md:bg-white max-md:text-black max-md:py-7 rounded-md z-30 transition-all ease-in-out duration-500'>
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get Start</a>
          </div>
          <img onClick={() => this.clickHandle()} className='cursor-pointer md:hidden' src={menu} alt="menu" />
        </div>
      </header>
    )
  }
}
export default Header