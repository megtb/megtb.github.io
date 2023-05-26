import React from "react";

export default function Contact() {

  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto text-left lg:px-40">
        <div className="text-left mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white font-raleway mb-4">
            Contact
          </h1>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                TIME ZONE
              </h2>
              <p className="leading-relaxed">
                Eastern United States
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                GITHUB
              </h2>
              <p className="leading-relaxed">
                <a href="https://github.com/megtb">megtb</a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                megbickerstaff@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKEDIN
              </h2>
              <p className="leading-relaxed"><a href="https://www.linkedin.com/in/meg-bickerstaff/">megtb</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}