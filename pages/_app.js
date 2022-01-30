import '../styles/globals.css'
import { Navbar } from './components/Navbar'
import { useState, useEffect } from "react"

function MyApp({ Component, pageProps }) {

  const [loader, setLoader] = useState(false)
  const [closeMenu, setCloseMenu] = useState(true)

  useEffect(() => {
    setTimeout(() => { setLoader(true) }, 1000);
  },[loader])

  return (
  <>
  <main className='main-total'>
    <div className={`loader-real ${loader && "loader-off"}`}>
      <div class={`wrapper ${loader && "loader-off-spans"}`}>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <span>Loading</span>
      </div>
    </div>
    {
      loader &&
      <>
        <Navbar setLoader={setLoader} setCloseMenu={setCloseMenu} closeMenu={closeMenu}/>
        {closeMenu && <Component {...pageProps} />}
      </>
    }
  </main>
  </>
  )
}

export default MyApp
