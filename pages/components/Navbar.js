import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { SiGmail } from "react-icons/si"


export const Navbar = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
        <nav className="contenedor-navegacion">
            <div className="contenedor-boton-nav">
                <Image src="/Logo.svg" alt="Picture of the author" width={100} height={100} />
                <div>
                    <button onClick={() => setOpen(!open)}>
                        <span className={`${open === true && "nav-open"}`}>CERRAR</span>
                        <span className={`${open === false && "nav-close"}`}>MENU</span>
                    </button>
                </div>
            </div>
            <div>
                <p>CONTACTAME</p>
            </div>
        </nav>
        <div className={`contenedor-navegacion-dos ${open === true && "nav-open-dos"}`}>
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
                    <Link href="/"><a onClick={() => setOpen(!open)}>Inicio</a></Link>
                    <Link href="/contact"><a onClick={() => setOpen(!open)}>Sobre mí</a></Link>
                    <Link href="/"><a onClick={() => setOpen(!open)}>Trabajos</a></Link>
                </div>
            }
        </div>
        </>
    )
}
