import Image from "next/image";
import github from "@/../public/icons/github-logo.png";

import JS from "@/../public/icons/icons8-javascript-48.png";
import vite from "@/../public/icons/icons8-rápidamente-48.png";
import react from "@/../public/icons/icons8-reaccionar-nativo-48.png";
import healthbooking from "@/../public/healthbooking.png";
import cake from "@/../public/cake is a lie.png";
import sass from "@/../public/icons/sass.png"
import css from "@/../public/icons/icons8-css3-48.png"



const projects = [
    { name: "HealthBooking", image: healthbooking, description: "App para la gestión de citas médicas", technologies: [JS, vite, sass], link: "https://healthbooking-front.vercel.app/", repoLink: "https://github.com/cristiancapobianco/HealtBooking-Back-end" },
    { name: "The cake is a lie", image: cake, description: "Biblioteca de videojuegos", technologies: [JS, react, css], link: "", repoLink: "https://github.com/cristiancapobianco/Henry-videogames-PI" },
];

export default function Project() {
    return (
        <div className="space-y-8 p-6">
            {projects.map((proj, index) => (
                <div key={index} className="flex bg-gray-800 rounded-lg shadow-lg h-44 transform transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-white">
                    <div className="w-1/3 h-full">
                        <Image
                            src={proj.image}
                            alt={`${proj.name} image`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="ml-6 flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <a href={proj.link} className="text-2xl font-bold">{proj.name}</a>
                            <p className="text-gray-400 my-2">{proj.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex space-x-4">
                                {proj.technologies.map((tech, index) => (
                                    <Image
                                        key={index}
                                        src={tech}
                                        alt={`${proj.name} technology`}
                                        width={25}
                                        height={25}
                                        className="rounded"
                                    />
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                {proj.link && (
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 inline-flex items-center"
                                    >
                                        Link &gt;
                                    </a>
                                )}
                                {proj.repoLink && (
                                    <a
                                        href={proj.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline inline-flex items-center"
                                    >
                                        <Image
                                            src={github}
                                            alt="GitHub logo"
                                            width={25}
                                            height={25}
                                            className="transition-transform duration-300 hover:scale-110"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
