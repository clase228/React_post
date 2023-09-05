import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import './styles.css';
import Avatar from '../../img/avatar.jpeg'
export function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

  return (
   <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
   <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
     <div className="bar"></div>
     <div className="bar"></div>
     <div className="bar"></div>
   </div>
   <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
     <li><img src={Avatar} alt="" /></li>
     <li>Никита</li>
     <li>polina.mumber@gmail.com</li>
     <li><a href="/">Главная</a></li>
     <li><a href="/aboutme">Обо мне</a> </li>
   </ul>
 </div>
   
  );
}
