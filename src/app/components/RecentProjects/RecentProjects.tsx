"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface RecentProjectsProps {
    imageLink: string;
    title: string;
    description: string;
    techStack: string[];
    liveDemo: string;
    stats: Array<[string, string]>;
}

const RecentProjects = ({imageLink,title,description,techStack,liveDemo,stats}:RecentProjectsProps) => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <>
        <div className="flex flex-col md:flex-row rounded-2xl h-fit overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 my-5 mx-4 sm:mx-6 group">

            {/* Image Side */}
            <div 
                className="w-full md:w-1/2 relative overflow-hidden bg-gray-50 min-h-[250px] sm:min-h-[300px] cursor-pointer"
                onClick={() => setIsImageOpen(true)}
            >
                <Image
                    src={imageLink}
                    alt={`${title} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Expand Icon indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 text-white rounded-full p-3 backdrop-blur-sm pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 h-fit flex flex-col justify-between">
                <div>
                    <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-400 mb-2 sm:mb-3">
                        Featured Project
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-gray-900 mb-3 sm:mb-4">
                       {title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 sm:mb-6">
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-7">
                        {techStack.map((tech:string,index:number) => (
                            <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons
                    <div className="flex gap-3">
                        <Link href={liveDemo} target="_blank" className="text-sm font-medium px-5 py-2 rounded-lg bg-gray-900 text-white">
                            Live Demo
                        </Link>


                    </div> */}
                </div>

                {/* Stats */}
                <div>
                    <div className="h-px bg-gray-100 my-5" />
                    <div className="flex gap-4 sm:gap-6 flex-wrap">
                        {stats.map(([val, label]) => (
                            <div key={label}>
                                <p className="text-base font-medium text-gray-900">{val}</p>
                                <p className="text-xs text-gray-400">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

        {/* Full Screen Image Modal */}
        {isImageOpen && (
            <div 
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
                onClick={() => setIsImageOpen(false)}
            >
                {/* Close button */}
                <button 
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-10"
                    onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                {/* Full screen image */}
                <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center">
                    <img 
                        src={imageLink} 
                        alt={`${title} full view`} 
                        className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="text-white/80 mt-4 text-center text-sm sm:text-base font-medium">{title}</p>
                </div>
            </div>
        )}
        </>
    );
};

export default RecentProjects;