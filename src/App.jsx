import { useRef,} from 'react'
import './App.css'
import Typed from 'typed.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {

  const el  = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["HTML", "CSS", "Javascript", "React", "Tailwindcss", "HTML", "CSS", "Javascript", "React", "Tailwindcss"],
      typeSpeed: 80,
    })

    return () => {
      typed.destroy();
    };

  },[])


  return (
      <div className='flex flex-col justify-center items-center h-[700px] md:flex-row'>
            <div className='flex flex-col h-full w-full bg-[#31313a] rounded-xl md:h-5/6 md:w-2/4'>
                <div className='mt-4'>
                  <img src="./src/assets/miFoto.png" alt="" className='w-36 h-36 rounded-full m-auto'/>
                </div>
                <div className='mt-4'>
                  <h2 className='text-one font-extrabold text-2xl md:text-4xl'>Oscar Echezuría</h2>
                  <h2 className='text-white mt-1'>Frontend Developer</h2>
                  <span ref={el} className='text-one '/>
                  <div></div>
                </div>
                <div>
                  <Link to="/">Sobre Mi</Link>
                  <Link to="/projects">Proyectos</Link>
                </div>
            </div>
            <div className='h-full w-full mt-2 bg-[#31313a] rounded-xl md:rounded-none md:rounded-r-xl md:w-2/4 md:h-3/4'>
              <h2>paginas</h2>
            </div>  
      </div>
          
  )
}

export default App
