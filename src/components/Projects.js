import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-left lg:px-40">
    <div>
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
             Projects
      </h1>
    </div>
         <div className="flex flex-col w-full mb-20">
            {projects.map((project) => (
              <section>
                <div className="flex relative">
                 <img
                  alt="gallery"
                  className="relative w-1/2 inset-0 object-contain m-8"
                  src={project.image}
                />
      <div class="p-6">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
          {project.subtitle}
      </h2>
      <div class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 hover:bg-indigo-500">
        <a href={project.link}>{project.title}</a>
      </div>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {project.description}
        </p>
        <a
          type="button"
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          href={project.github}>
            Project Github
        </a>
        {project.youtube && 
          <a
          type="button"
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          href={project.youtube}>
            Video Walkthrough
        </a>
        }
      </div>
    </div>
  </section>
  ))}
  </div>
  </div>
  
</section>
    
    // <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    //   <div className="container px-5 py-10 mx-auto text-left lg:px-40">
    //     <div className="flex flex-col w-full mb-20">
    //       <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
    //         Projects
    //       </h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         placeholder
    //       </p>
    //     </div>
    //     <div className="flex flex-wrap -m-4">
    //       {projects.map((project) => (
    //         <section>
    //           <div>
    //           href={project.link}
    //           key={project.image}
    //           className="sm:w-1/2 w-100 p-4"
    //           </div>
              
    //           <div className="flex relative">
    //             <img
    //               alt="gallery"
    //               className="absolute inset-0 w-full h-full object-contain"
    //               src={project.image}
    //             />
    //             <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
    //               <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
    //                 {project.subtitle}
    //               </h2>
    //               <h1 className="title-font text-lg font-medium text-white mb-3">
    //                 {project.title}
    //               </h1>
    //               <p className="leading-relaxed">{project.description}</p>
    //             </div>
    //           </div>
    //           </section>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}