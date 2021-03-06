import Link from 'next/link'
import {useEffect, useState, useRef} from "react"


export default function Home(props) {

  const [mouse, setMouse] = useState()
  const [ejesY, setEjesY] = useState({divY:false, stackY:false, designY: false, esperasY:false})

  const divRef = useRef()
  const stackRef = useRef()
  const designRef = useRef()
  const esperasRef = useRef()
  
  useEffect(()=>{
    const handleScroll = () => {
      const div = divRef.current;
      const stack = stackRef.current;
      const design = designRef.current;
      const esperas = esperasRef.current;
      let divY = 0
      let stackY = 0
      let designY = 0
      let esperasY = 0
      if(div){
        divY = div.getBoundingClientRect().y;
      }
      if(stack){
        stackY = stack.getBoundingClientRect().y;
      }
      if(design){
        designY = design.getBoundingClientRect().y;
      }
      if(esperas){
        esperasY = esperas.getBoundingClientRect().y;
      }
        const divEye = divY <= 550 && true 
        const stackEye = stackY <= 550 && true
        const designEye = designY <= 550 && true
        const esperasEye = esperasY <= 550 && true
        setEjesY({...ejesY,divY:divEye, stackY:stackEye, designY:designEye, esperasY:esperasEye})
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
            <h1>Hola, mi<br/>Nombre es <b>Lautaro</b></h1>
            <p>Mi pasion <b>desarrollador FullStack MERN</b> vivo en <br/>Argentina en el sur, provincia de Chubut.</p>
            <span className='span-animation-scroll'>
              <span>S</span>
              <span>C</span>
              <span>R</span>
              <span>O</span>
              <span>L</span>
              <span>L</span>
            </span>
          </div>
          {mouse &&<div className='imagen-fondo-yo' style={{transform: `translatex(${mouse.x * 2}px) translateY(${mouse.y * 5}px)`, transition: "all 1s"}}></div>}
          <img className="imagen-yo" src="/yo-1.svg" alt="Picture of the author" width={500} height={500} />
          {mouse &&<img className="imagen-yo-dos" src="/yo-2.svg" alt="Picture of the author" width={500} height={500} style={{transform: `translatex(${mouse.x}px) translateY(${mouse.y}px)`, transition: "all 1s"}}/>}
        </section>
        <div ref={divRef} className='working-index'>
          {
            ejesY.divY &&
            <>
              <h2>Trabajemos Juntos.</h2>
              <p>Soy un desarrollador web con una fuerte ??nfasis en la "Mejora progresiva", <b>busco formas creativas de ampliar los l??mites del c??digo</b> front-end del sitio web sin comprometer el soporte y el rendimiento del navegador. Siendo el front-end mi lugar preferido estoy capacitado para trabajar desde el lado back-end con lo m??s actualizado de node.js</p>
              <Link href="/trabajos">
                <a onClick={() => {props.setLoader(false)}}>
                  <span>Mis Trabajos</span>
                  {mouse &&<span style={{transform: `translatex(${mouse.x * 5}px) translateY(${mouse.y * 2}px)`, transition: "all 1s"}}></span>}
                </a>
              </Link>
            </>
          }
        </div>
        <div className='stack' ref={stackRef}>
          {ejesY.stackY &&
            <>
            {mouse &&<img src="/stack-3.png" width={500} height={500} style={{transform: `translatex(${mouse.x * 3}px) translateY(${mouse.y * 3}px)`, transition: "all 1s"}}/>}
              <img src="/stack-2.png" width={500} height={500}/>
              <img src="/stack-1.png" width={500} height={500}/>
              <div>
                <h2>Mi stack es <b>MERN</b></h2>
                <p>M??s all?? del desarrollo front-end, <b>soy especialista en <a target="_blank" href="https://www.mongodb.com/mern-stack">MERN</a></b> (Node.js, React.js, Express.js, MongoDB). Me complace ayudar a planificar, crear y entregar un proyecto MERN que sea r??pido, seguro y confiable.</p>
                <p>Si el stack MERN no te convence, <b>estoy actualmente estudiando Phyton + base de datos MySql</b> para expandirme m??s all?? en el back-end.</p>
              </div>
            </>
          }
        </div>
        <div className='design-index' ref={designRef}>
          {ejesY.designY &&
            <>
              {mouse &&<img src="/Design-2.png" width={500} height={500}  style={{transform: `translatex(${mouse.x * 4}px) translateY(${mouse.y * 1.5}px)`, transition: "all 1s"}}/>}
              <img src="/Design-1.png" width={500} height={500}/>
              <div>
                <h2>Dise??os <b>Modernos y Detallados</b></h2>
                <p>Busco los peque??os detalles que dan vida a un dise??o. Con una excelente interacci??n en la <b>interfaz de usuario</b>, un buen dise??o de interacci??n fundamenta una interfaz con un <b>sentido de espacio y l??gica</b>.</p>
                <p>Combino el <b>tiempo y el movimiento</b> matizados con un profundo conocimiento de la representaci??n del navegador para ofrecer interacciones l??gicas.</p>
              </div>
            </>
          }
        </div>
        <div className='que-esperas-index' ref={esperasRef}>
          {ejesY.esperasY &&
            <>
              {mouse &&<img src="/puntos-cuadrado.svg" width={400} height={500} style={{transform: `translatex(${mouse.x * 4}px) translateY(${mouse.y * 4}px)`, transition: "all 1s"}}/>}
              <div>
                <h2>??Que esperas para contactarme?</h2>
                <p>Creo firmemente que los dise??adores y desarrolladores tienen la responsabilidad de asegurarse de que lo que estamos construyendo no haga da??o y trato de ser lo m??s ??tico posible al asumir proyectos.</p>
                <p>Dicho todo esto, si est?? buscando una persona para trabajar con muchas ganas de crecer en el mundo laboral y de seguir aprendiendo tecnolog??as nuevas, entonces encontraste a la persona indicada tengamos una charla o reuni??n para acordar una propuesta, te dejo mi hoja de vida con todos mis datos de contacto.</p>
                  <a download="LautaroStein" href='/LautaroStein.pdf'>
                    <span>Hoja de vida</span>
                    {mouse &&<span style={{transform: `translatex(${mouse.x * 5}px) translateY(${mouse.y * 2}px)`, transition: "all 1s"}}></span>}
                  </a>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}
