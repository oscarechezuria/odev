import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Slider from "../components/slider"


export default function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-center p-8 mt-8 md:mt-12">
        <h2 className="text-2xl mb-2 font-extrabold text-one">Sobre mi</h2>
        <h3 className="mb-2">
          Creo en la progamación como un medio para impactar la calidad de vidad de las personas a través de soluciones tecnológicas. 
        </h3>
        <h3 className="mt-4">
          Actualmente poseo habilidades en HTML, CSS, Javascript, React, Next js y TailwindCss puedes ver mis proyectos haciendo click <Link to="/projects" className="text-one">aqui</Link>. 
        </h3>
        <div className="flex mt-10">
          <marquee behavior="" direction="">
            <Slider/>
          </marquee>
        </div>
      </div>
    </Layout>
  )
}
