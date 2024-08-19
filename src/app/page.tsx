import Image from "next/image";

import NavBar from "@/ui/NavBar";
import Skill from "@/ui/Skill";
import SkillsAdd from "@/ui/skillsAdd";
import Project from "@/ui/Project";
import Education from "@/ui/Education";
import perfilpicture from "@/../public/WhatsApp-Image-2024-04-17-at-15.52.50.png";
import SmokeEffect from "@/ui/SmokeEffect";

export default function Home() {
  return (
    <main className="bg-customDark text-white min-h-screen p-8 flex justify-center relative overflow-hidden">
      <SmokeEffect />
      <div className="max-w-6xl w-full relative z-20">
        <div>
          <NavBar />
        </div>
        <div className="text-center my-8">
          <Image src={perfilpicture} alt="foto" width={200} height={200} className="rounded-full mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Hola! Soy Cristian Capobianco</h1>
          <h2 className="text-2xl mt-2">Web Developer</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/cristian-sebastian-capobianco/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/cristiancapobianco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:cristian.s.capobianco@gmail.com"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Email
            </a>
          </div>
          <p className="mt-6 text-lg">
            Soy Cristian Capobianco, un entusiasta desarrollador web full stack con una profunda pasión por construir aplicaciones web impactantes. Me especializo en transformar ideas en soluciones digitales brillantes, combinando creatividad y tecnología para alcanzar nuevos hitos y superar desafíos complejos. Mi misión es crear experiencias digitales excepcionales que inspiren y sorprendan.
          </p>
        </div>
        <div className="text-center my-8">
          <a
            href="/CristianCapobiancoCV-FullStackDeveloper.pdf"
            download="Cristian_Capobianco_CV.pdf"
            className="mt-4 w-80 bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded transition-transform duration-300 hover:border-white hover:text-white hover:bg-transparent hover:scale-105 inline-block"
          >
            Descargar CV
          </a>


        </div>
        <div id="habilidades" className="my-8 p-6 rounded-lg  relative z-20">
          <h1 className="text-3xl font-bold mb-4 text-center">Habilidades</h1>
          <Skill />
        </div>
        <div className="my-8 p-6 rounded-lg  relative z-20">
          <h1 className="text-3xl font-bold mb-4 text-center">Habilidades adicionales</h1>
          <SkillsAdd />
        </div>
        <div id="proyectos" className="my-8 p-6 rounded-lg  relative z-20">
          <h1 className="text-3xl font-bold mb-4 text-center">Proyectos</h1>
          <Project />
        </div>
        <div id="formacion" className="my-8 p-6 rounded-lg  relative z-20">
          <h1 className="text-3xl font-bold mb-4 text-center">Formación</h1>
          <Education />
        </div>
        <div id="contacto" className="my-8 p-6 rounded-lg relative z-20">
          <h1 className="text-3xl font-bold text-center mb-4">Contacto</h1>
          <p className="text-center mb-4">¡Conéctate conmigo a través de mis redes sociales o por correo electrónico!</p>

          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/cristian-sebastian-capobianco/" target="_blank" rel="noopener noreferrer">
              <img src="\skills icons\icons8-linkedin-48.png" alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/cristiancapobianco" target="_blank" rel="noopener noreferrer">
              <img src="\skills icons\icons8-github-64.png" alt="GitHub" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/cristian.wild/">
              <img src="\skills icons\icons8-instagram-48.png" alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm">Correo Electrónico: <a href="mailto:cristian.s.capobianco@gmail.com" className="text-blue-500 hover:underline">cristian.s.capobianco@gmail.com</a></p>
            <p className="text-sm mt-4">Teléfono: <a href="https://wa.me/5492235599534" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+54 9 223 559-9534</a></p>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm font-medium">Hecho con</p>
          </div>

          <div className="flex justify-center space-x-6 mt-2">
            <img src="\skills icons\icons8-nextjs-96.png" alt="Next.js" className="h-8 w-8" />
            <img src="\skills icons\icons8-tailwind-css-96.png" alt="Tailwind CSS" className="h-8 w-8" />
            <img src="\skills icons\icons8-javascript-96.png" alt="JavaScript" className="h-8 w-8" />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Cristian Capobianco. Todos los derechos reservados.</p>
          </div>
        </div>

      </div>
    </main>
  );
}
