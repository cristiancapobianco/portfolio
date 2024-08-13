import css from "@/../public/skills icons/icons8-css3-48.png";
import html from "@/../public/skills icons/icons8-html-5-48.png";
import JS from "@/../public/skills icons/icons8-javascript-48.png";
import react from "@/../public/skills icons/icons8-reaccionar-nativo-48.png";
import vite from "@/../public/skills icons/icons8-rápidamente-48.png";
import nextsvg from "@/../public/skills icons/pngwing.com.png";
import tailwind from "@/../public/skills icons/icons8-tailwind-css-96.png"

import Image from "next/image";

const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "Javascript", logo: JS },
    { name: "ReactJS", logo: react },
    { name: "ViteJS", logo: vite },
    { name: "NextJS", logo: nextsvg },
    { name: "TailwindCSS", logo: tailwind },

];

export default function Skills() {
    return (
        <div className="flex flex-wrap gap-6 p-6 justify-center items-center">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative flex h-30 w-60 items-center bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden min-w-[150px] min-h-[100px] transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-white">
                    <div className="relative z-10 flex items-center">
                        <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={60}
                            height={60}
                            className="transition-transform duration-300"
                        />
                        <h1 className="ml-4 text-xl font-bold">{skill.name}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

// {name:"", logo:""},