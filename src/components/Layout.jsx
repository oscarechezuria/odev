import "../components/Layout.css"
import { useEffect, useRef } from 'react'
import { FaLinkedinIn, FaUserLarge, FaLaptopCode } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import Typed from "typed.js"




// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
    const el  = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer"],
            typeSpeed: 80,
        })
    
        return () => {
            typed.destroy();
        };
    
        },[])
    

        return (
            <div className='flex flex-col justify-center items-center h-fullun md:h-[700px] md:flex-row'>
                <div className='flex flex-col h-full w-full bg-[#31313a] rounded-xl md:h-5/6 md:w-2/4'>
                    <div className='mt-4'>
                        <img src="./src/assets/miFoto.png" alt="" className='w-36 h-36 rounded-full m-auto'/>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-one font-extrabold text-2xl md:text-4xl'>Oscar Echezuría</h2>
                        <div className='text-white mt-1'>
                            <span ref={el} className='text-white '/>
                        </div>
                        <Link to={"https://www.linkedin.com/in/oscar-echezuría-52889a127"} className="flex justify-center mt-2 w-8 m-auto" target="_blank">
                            <FaLinkedinIn/>
                        </Link>
                    </div>
                    <div className="flex justify-center gap-8 mt-8">
                        <Link to="/">
                            <div className="flex items-center justify-center flex-col w-24 h-24 bg-white bg-opacity-25 rounded-xl font-bold md:w-32 md:h-32">
                                <div className="mb-2">
                                    <FaUserLarge className="text-one text-xl"/>
                                </div>
                                <h2>
                                    Sobre Mi
                                </h2>
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div className="flex items-center justify-center flex-col mb-4 w-24 h-24 bg-white bg-opacity-25 rounded-xl font-bold md:w-32 md:h-32">
                                <div className="mb-2">
                                    <FaLaptopCode className="text-one text-2xl"/>
                                </div>
                                <h2>
                                    Proyectos
                                </h2>
                            </div>
                        </Link> 
                    </div>
                    
                </div>
                <div className='h-full w-full mt-2 bg-[#31313a] rounded-xl md:rounded-none md:rounded-r-xl md:w-2/4 md:h-3/4 md:mt-0'>
                    <div>{children}</div>
                </div>
            </div>
            
    )
}
