'use client'

//Iconos de MUI
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CloseIcon from '@mui/icons-material/Close';
import { items_links } from './data/links_data'

//Use state de React
import { useState, useEffect } from 'react';

export default function Home() {

  const [stateSubLinks1, setStateSubLinks1] = useState(false)
  const [stateSubLinks2, setStateSubLinks2] = useState(false)
  const [stateSubLinks3, setStateSubLinks3] = useState(false)


  useEffect(() => {
    const figure_dropdown = document.querySelectorAll('#figure-drop-down__subItem');
    if (figure_dropdown[2]) {
      figure_dropdown[2].addEventListener('click', changeState_subLink_2);
      figure_dropdown[4].addEventListener('click', changeState_subLink_4);
    }

    // Limpia el evento cuando el componente se desmonte para evitar fugas de memoria
    return () => {
      if (figure_dropdown[2]) {
        figure_dropdown[2].removeEventListener('click', changeState_subLink_2);
        figure_dropdown[4].removeEventListener('click', changeState_subLink_4);
      }
    };
  }, [stateSubLinks2, stateSubLinks3]);

  // Funcion de estado del item 'Categories'
  const showSubLinks1Fun = () => {
    const container_subLinks1 = document.querySelector('#contenedor-subLinks__sideBar')
    if (!stateSubLinks1) {
      container_subLinks1?.classList?.add('show-content')
      setStateSubLinks1(true)
    }
    if (stateSubLinks1) {
      container_subLinks1?.classList?.remove('show-content')
      setStateSubLinks1(false)
    }
  }

  //Funcion de estado del sub-item Category 3
  const changeState_subLink_2 = () => {
    const container_subLinks2 = document.querySelectorAll('.each-contenedor__SubItem2')
    const arraySubLinks_2 = Array.from(container_subLinks2).slice(0, 3)
    if (!stateSubLinks2) {
      arraySubLinks_2.forEach(elem => elem?.classList?.add('show-content'))
      setStateSubLinks2(true)
    }
    if (stateSubLinks2) {
      arraySubLinks_2.forEach(elem => elem?.classList?.remove('show-content'))
      setStateSubLinks2(false)
    }
  };

  //Funcion de estado del sub-item Category 5
  const changeState_subLink_4 = () => {
    const container_subLinks2 = document.querySelectorAll('.each-contenedor__SubItem2')
    const arraySubLinks_4 = Array.from(container_subLinks2).slice(3, 7)
    if (!stateSubLinks3) {
      arraySubLinks_4.forEach(elem => elem?.classList?.add('show-content'))
      setStateSubLinks3(true)
    }
    if (stateSubLinks3) {
      arraySubLinks_4.forEach(elem => elem?.classList?.remove('show-content'))
      setStateSubLinks3(false)
    }
  };


  return (
    <div id="contenedor-superior__sideBar">
      <div id="contenedor-sideBar">
        {/* Header */}
        <div id="header-sideBar">
          <div className="contenedor-internos__sideBar">
            <div id='respaldo-bakckground_bussinessIcon'>
              <BusinessCenterIcon id='BusinessCenterIcon' />
            </div>
            <h2 id='titulo-hirefly'>Hirefy</h2>
          </div>
          <div className="contenedor-internos__sideBar">
            <CloseIcon id='CloseIcon' />
          </div>
        </div>
        {/* Body */}
        <div id='body-sideBar'>
          {
            items_links?.map((elem, index) =>
              <div className='contenedor-item__sideBar' key={index} >
                <figure className='logo-item__sideBar'>{elem.icono}</figure>
                <h3>{elem?.nombre}</h3>
                <figure className='container-logo-dropdown' onClick={showSubLinks1Fun}>{elem.iconDropdown}</figure>
              </div>
            )
          }
          <div id='contenedor-subLinks__sideBar'>
            {items_links?.map((item, index) => {
              if (item.hasOwnProperty('subItems')) {
                return (
                  <div className='subContenedor-subLinks' key={index}>
                    {item.subItems.map((subItem, subIndex) => (
                      <div className='each-contenedor-subLinks' key={subIndex}>
                        <div className='contenedor-tituloAndFigure__subLinks'>
                          <h3 className='nombre-subLink' key={subIndex}>{subItem.nombre}</h3>
                          <figure id='figure-drop-down__subItem'>{subItem?.iconDropdown}</figure>
                        </div>
                        {
                          subItem?.subItems?.map((subItem2, subIndex2) => (
                            <div className='each-contenedor__SubItem2' key={subIndex2}>
                              <h2>{subItem2.nombre}</h2>
                            </div>
                          ))
                        }
                      </div>
                    ))}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <hr className='hr-footer' />
        {/* Footer */}
        <div id='footer_sideBar'>
            <span>© 2023 Hirefy. LLC.</span>
            <ul id='container-refsLinks__FooterSideBar'>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
              <li>Version</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
