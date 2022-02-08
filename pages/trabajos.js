import React from 'react';
import Link from 'next/link'
import {useEffect, useState, useRef} from "react"

const trabajos = (props) => {
  const [mouse, setMouse] = useState()
  const [ejesY, setEjesY] = useState({divY:false, proyectoY:false, francoY:false})
  const divRef = useRef()
  const proyectoRef = useRef()
  const francoRef = useRef()

  useEffect(()=>{
    const handleScroll = () => {
      const div = divRef.current;
      const proyecto = proyectoRef.current;
      const franco = francoRef.current;
      let divY = 0
      let proyectoY = 0
      let francoY = 0
      if(div){
        divY = div.getBoundingClientRect().y;
      }
      if(proyecto){
        proyectoY = proyecto.getBoundingClientRect().y;
      }
      if(franco){
        francoY = franco.getBoundingClientRect().y;
      }
        const divEye = divY <= 550 && true 
        const proyectoEye = proyectoY <= 550 && true 
        const francoEye = francoY <= 550 && true 
        setEjesY({...ejesY,divY:divEye, proyectoY:proyectoEye, francoY:francoEye})
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
            <h1 className='trabajos-h1'><b>Proyectos realizados.</b></h1>
            <p>Construyo sitios web interactivos que se ejecutan en <b>plataformas y dispositivos.</b> <br/>Estos son algunos de mis mejores proyectos hechos de momento:</p>
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
        <div ref={divRef} className='mytinerary-work'>
          {
            ejesY.divY &&
            <>
              {mouse &&<img src="/mytinerary-1.png" width={350} height={350} style={{transform: `translatex(${mouse.x * 3}px) translateY(${mouse.y * 3}px)`, transition: "all 1s"}}/>}
              <img src="/mytinerary-2.png" width={350} height={350}/>
              <div>
                <h2><b>MyTinerary.</b></h2>
                <p>Más allá del desarrollo front-end, <b>soy especialista en</b> (Node.js, React.js, Express.js, MongoDB). me complace ayudar a planificar, crear y entregar un proyecto MERN que sea rápido, seguro y confiable.</p>
                <p>Si el stack MERN no te convence, <b>estoy actualmente estudiando Phyton + base de datos MySql</b> para expandirme mas alla en el back-end.</p>
              </div>
            </>
          }
        </div>
        <div ref={proyectoRef} className='mytinerary-work'>
          {
            ejesY.proyectoY &&
            <>
              {mouse &&<img src="/proyectozzzz-1.png" width={350} height={350} style={{transform: `translatex(${mouse.x * 3}px) translateY(${mouse.y * 3}px)`, transition: "all 1s"}}/>}
              <img src="/proyectozzzz-2.png" width={350} height={350}/>
              <div>
                <h2><b>Proyecto ZzZz.</b></h2>
                <p>Más allá del desarrollo front-end, <b>soy especialista en</b> (Node.js, React.js, Express.js, MongoDB). me complace ayudar a planificar, crear y entregar un proyecto MERN que sea rápido, seguro y confiable.</p>
                <p>Si el stack MERN no te convence, <b>estoy actualmente estudiando Phyton + base de datos MySql</b> para expandirme mas alla en el back-end.</p>
              </div>
            </>
          }
        </div>
        <div ref={francoRef} className='mytinerary-work'>
          {
            ejesY.francoY &&
            <>
              {mouse &&<img src="/franco-1.png" width={350} height={350} style={{transform: `translatex(${mouse.x * 3}px) translateY(${mouse.y * 3}px)`, transition: "all 1s"}}/>}
              <img src="/franco-2.png" width={350} height={350}/>
              <div>
                <h2><b>Franco PetShop.</b></h2>
                <p>Más allá del desarrollo front-end, <b>soy especialista en</b> (Node.js, React.js, Express.js, MongoDB). me complace ayudar a planificar, crear y entregar un proyecto MERN que sea rápido, seguro y confiable.</p>
                <p>Si el stack MERN no te convence, <b>estoy actualmente estudiando Phyton + base de datos MySql</b> para expandirme mas alla en el back-end.</p>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
};

export default trabajos;
