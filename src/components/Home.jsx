import React from 'react';
import { motion } from 'framer-motion';
import pic from '../../public/photo.avif';
import { SiMongodb, SiExpress, FaReact, FaNodeJs } from 'react-icons/all';
import { ReactTyped } from 'react-typed';

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={['Developer', 'Programmer', 'Coder']}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Result-driven Software Engineer with experience at Persistent Systems. Proficient
              in ReactJS, JavaScript, MongoDB, Express, Node, and SQL, developing robust and
              scalable applications. Skilled in creating user-friendly web pages and refining
              projects for client alignment. Experienced in Agile Methodologies and all SDLC
              phases. Developed an e-commerce website for Quickbooks (Intuit Market) using HTML5,
              CSS3, JavaScript, and ReactJS. Strong communicator with excellent analytical and
              problem-solving skills.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <motion.img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt=""
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
