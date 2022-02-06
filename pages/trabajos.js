import React from 'react';
import Link from 'next/link'
import {useEffect, useState, useRef} from "react"

const trabajos = (props) => {
  const [mouse, setMouse] = useState()
  const [ejesY, setEjesY] = useState({divY:false})
  const divRef = useRef()

  useEffect(()=>{
    const handleScroll = () => {
      const div = divRef.current;
      let divY = 0
      if(div){
        divY = div.getBoundingClientRect().y;
      }
        const divEye = divY <= 550 && true 
        setEjesY({...ejesY,divY:divEye})
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  useEffect(() => {
    setMouse({x:0, y:0})
  },[props])

  const onMouseMove = (e) => {
    setMouse({x: e.screenX * 0.002, y:e.screenY * 0.005})
  }
  return (
    <>
      <div className='div-section-main' onMouseMove={onMouseMove.bind(this)}>
        <section className='container-total-pages'>
          <div className='texto-contexto-pagina'>
            <h1>Mis <b>Trabajos</b></h1>
            <p>Construyo sitios web interactivos que se ejecutan en <b>plataformas y dispositivos.</b></p>
            <p>Mis top proyectos:</p>
            <span className='span-animation-scroll'>
              <span>S</span>
              <span>C</span>
              <span>R</span>
              <span>O</span>
              <span>L</span>
              <span>L</span>
            </span>
          </div>
        </section>
      </div>
    </>
  )
};

export default trabajos;
