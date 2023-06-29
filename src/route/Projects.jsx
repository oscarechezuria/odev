import Layout from "../components/Layout";


export default function Projects() {

  const project = [
    { title: "Registro de pacientes",
      route: "",
      img: ""
    }
  ]

  return (
    <Layout>
        <div>
          {
            project.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 justify-items-center p-2 md:grid-cols-3 ">
                <div>
                  <div className="m-auto rounded-xl w-24 h-24 bg-white bg-opacity-25 md:w-32 md:h-32">
                    <h2>img</h2>
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </Layout>
  )
}
