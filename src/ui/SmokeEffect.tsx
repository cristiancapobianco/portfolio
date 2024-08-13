import React from "react";

export default function SmokeEffect() {
    return (
        <>
            {/* Efecto de humo en la esquina superior izquierda */}
            <div className="absolute top-[5%] left-[10%] z-10 pointer-events-none w-[200px] h-[190px]">
                <div className="absolute top-0 left-0 w-full h-full flex justify-start items-start">
                    <div className="w-[100%] h-[100%] bg-green-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow"></div>
                    <div className="absolute w-[100%] h-[100%] bg-yellow-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-2000"></div>
                    <div className="absolute w-[100%] h-[100%] bg-red-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-4000"></div>
                </div>
            </div>

            {/* Segundo efecto de humo en la esquina inferior derecha */}
            <div className="absolute top-[35%] right-[5%] z-10 pointer-events-none w-[200px] h-[180px]">
                <div className="absolute bottom-0 right-0 w-full h-full flex justify-end items-end">
                    <div className="w-[100%] h-[100%] bg-purple-600 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow"></div>
                    <div className="absolute w-[100%] h-[100%] bg-blue-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-2000"></div>
                    <div className="absolute w-[100%] h-[100%] bg-pink-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-4000"></div>
                </div>
            </div>

            {/* tercer efecto de humo en la esquina inferior izquierda */}
            <div className="absolute bottom-[-10%] left-[-40%] z-10 pointer-events-none w-[1000px] h-[950px]">
                <div className="absolute bottom-[50%] left-0 w-full h-full flex justify-end items-end">
                    <div className="w-[100%] h-[100%] bg-pink-400 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow"></div>
                    <div className="absolute w-[100%] h-[100%] bg-purple-400 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-2000"></div>
                    <div className="absolute w-[100%] h-[100%] bg-magenta-500 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-4000"></div>
                </div>
            </div>

            {/* Cuarto efecto de humo esquina inferior derecha */}
            <div className="absolute bottom-[-5%] right-[-5%] z-10 pointer-events-none w-[400px] h-[380px]">
                <div className="absolute bottom-0 left-0 w-full h-full flex justify-end items-end">
                    <div className="w-[100%] h-[100%] bg-blue-600 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow"></div>
                    <div className="absolute w-[100%] h-[100%] bg-blue-700 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-2000"></div>
                    <div className="absolute w-[100%] h-[100%] bg-blue-800 opacity-50 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow animation-delay-4000"></div>
                </div>
            </div>
        </>
    );
}
