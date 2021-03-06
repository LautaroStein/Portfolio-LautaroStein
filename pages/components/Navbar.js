import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { SiGmail } from "react-icons/si"


export const Navbar = ({setLoader, setCloseMenu, closeMenu, asPath}) => {

    const [open, setOpen] = useState(false)

    return(
        <>
        <nav className="contenedor-navegacion">
            <div className="contenedor-boton-nav">
                <Image src={`/${asPath === "/" ? "Logo.png" : asPath === "/trabajos" ? "Logo-1.png" : "Logo-2.png"}`} alt="Picture of the author" width={80} height={80} />
                <div>
                    <button onClick={() => {setOpen(!open); setCloseMenu(!closeMenu)}}>
                        <span className={`${open === true && "nav-open"}`}>CERRAR</span>
                        <span className={`${open === false && "nav-close"}`}>MENU</span>
                    </button>
                </div>
            </div>
            <div className="contac">
                <Image src={`/${asPath === "/" ? "mesage.svg" : asPath === "/trabajos" ? "mesage-1.svg" : "mesagee.svg"}`} alt="Picture of the author" width={40} height={40} />
                <span className="contactame">CONTACTAME</span>
            </div>
        </nav>
        <div className={`contenedor-navegacion-dos ${open === true && "nav-open-dos"}`} style={{background:`${asPath === "/" ? "#AADCEC" : asPath === "/trabajos" ? "#FCC5D3" : "#9BDABE"}`}}>
        </div>
        <div className={`contenedor-navegacion-tres ${open === true && "nav-open-tres"}`}>
            <ul className={`social-links ${open === true && "animation-social"}`}>
                <li><Link href="/"><BsGithub /></Link></li>
                <li><Link href="/"><BsInstagram /></Link></li>
                <li><Link href="/"><BsLinkedin /></Link></li>
                <li><Link href="/"><SiGmail /></Link></li>
            </ul>
            {open === true &&
                <div className={`navegacion-links ${open === true && "animation-write"}`}>
                    <Link href="/"><a onClick={() => {setOpen(!open); setLoader(false); setCloseMenu(!closeMenu)}}>Inicio</a></Link>
                    <Link href="/trabajos"><a onClick={() => {setOpen(!open); setLoader(false); setCloseMenu(!closeMenu)}}>Trabajos</a></Link>
                    <Link href="/contact"><a onClick={() => {setOpen(!open); setLoader(false); setCloseMenu(!closeMenu)}}>Sobre m??</a></Link>
                </div>
            }
        </div>
        </>
    )
}
