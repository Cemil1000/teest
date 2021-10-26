import React, { useState, useEffect } from 'react';

import { Navbar, Nav } from 'react-bootstrap'

import { FaAngleDoubleUp, FaLanguage, FaAddressCard, FaFileDownload, FaProjectDiagram } from 'react-icons/fa';

export default function NavBar() {

  // TODOO: NavBar effect "changeBackgroundColor"
  // const [navBar, setNavBar] = useState(true);
  // const changeBackgroundColor = () => {
  //   if (window.scrollY <= 200) {
  //     setNavBar(false)
  //   } else {
  //     setNavBar(true)
  //   }
  // }
  // if (typeof window !== "undefined") {
  //   window.addEventListener('scroll', changeBackgroundColor);
  // }

  return (
    <>
      <Navbar fixed="top" id='navBar_container' /*className={navBar ? 'active' : ''}*/ collapseOnSelect expand='lg' variant='light'>

        <Navbar.Brand className='responsive-name' href='#landing'>
          <FaAngleDoubleUp className="iconReact" size='1.3rem' />
          <p className="text">CEMIL YILMAZ</p>
        </Navbar.Brand>

        {/*//?--( Navbar.Toggle => BurgerMenu Only-For-Responsive )--*/}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        {/*//? 'aria-controls' permet de ciblé la 'class' responsive-navbar-nav[ligne35] pour lui ajouter un effet ou autre (ici on transform en BurgerMenu)' */}

        <Navbar.Collapse className='responsive-navbar-nav'>
          <Nav className="navLink">
            <Nav.Link href='#aboutMe'> <FaAddressCard className="iconReact" size='1.3rem' /> <p className="text"> À PROPOS DE MOI </p> </Nav.Link>
            <Nav.Link href='#cv'> <FaFileDownload className="iconReact" size='1.1rem' /> <p className="text"> CV </p> </Nav.Link>
            <Nav.Link href='#project'> <FaProjectDiagram className="iconReact" size='1.2rem' /> <p className="text"> PROJETS </p> </Nav.Link>
            {/* <Nav.Link href='#'> <FaLanguage className="iconReact" size='1.4rem' /> <p className="text"> ENG </p> </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  )
}
