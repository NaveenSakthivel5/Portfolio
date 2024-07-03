import React, { useState } from "react";
import { motion } from "framer-motion";
import socialmediapic from "../../public/socialmediapic.jpg";
import exampic from "../../public/exampic.jpg";

const projects = [
  {
    id: 1,
    logo: socialmediapic,
    name: "Fun Gram",
    description:
      "MERN Stack social media application connecting users through seamless web experience.",
    link: "https://fun-gram.netlify.app/",
    frontendSourceCodeLink:
      "https://github.com/NaveenSakthivel5/FunGram-SocialMedia-Frontend",
    backendSourceCodeLink:
      "https://github.com/NaveenSakthivel5/FunGram-SocialMedia-Backend",
  },
  {
    id: 2,
    logo: exampic,
    name: "Quiz Zone",
    description:
      "MERN Stack Exam Portal with comprehensive functionalities for admins and users.",
    link: "https://quiz-zone-portal.netlify.app/",
    frontendSourceCodeLink:
      "https://github.com/NaveenSakthivel5/Quiz-Zone-MERN-frontend",
    backendSourceCodeLink:
      "https://github.com/NaveenSakthivel5/Quiz-Zone-MERN-Backend",
  },
  
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.logo}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Live Demo
                  </button>
                </a>
                <button
                  onClick={() => openModal(project)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="bg-white border border-gray-200 rounded-lg p-4 z-50"
            onClick={handleModalClick} 
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.frontendSourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 rounded"
              onClick={closeModal} 
            >
              Frontend Source Code
            </a>
            <a
              href={selectedProject.backendSourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 rounded mt-2"
              onClick={closeModal} 
            >
              Backend Source Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
