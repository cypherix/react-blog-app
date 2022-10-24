
import { Link, NavLink } from "react-router-dom"
import { Offcanvas } from "react-bootstrap"
import { useState } from "react"

const Menu = ()=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
            
    <img alt="MENU" src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" onClick={handleShow}/>
  

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BLOG</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                <ul className="menu-link">
                    <li><NavLink to="myblog">My Blog</NavLink></li>
                    <li><NavLink to="addblog">Add Blog</NavLink></li>
                </ul>
        </Offcanvas.Body>
      </Offcanvas>
    
        </div>
    )
}
export const Nav = ()=>{
    
    return(
        <div className="navbar">
        <nav>
            <div className="logo">
                <h1><Link to='/'>BLOG</Link></h1>
            </div>
            <div className="nav-link">
                <ul>
                    <li><NavLink to="myblog">My Blog</NavLink></li>
                    <li><NavLink to="addblog">Add Blog</NavLink></li>
                </ul>
            </div>
            <div className="nav-icon">
                       <Menu/>
            </div>

        </nav>
        </div>
    )
}