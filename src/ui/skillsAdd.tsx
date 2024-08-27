import figma from "@/../public/icons/figma.png";
import illustrator from "@/../public/icons/illustrator.png";
import photoshop from "@/../public/icons/photoshop.png";


import Image from "next/image";

const skills = [
    { name: "Figma", logo: figma },
    { name: "illustrator", logo: illustrator },
    { name: "photoshop", logo: photoshop },
];

export default function SkillsAdd() {
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