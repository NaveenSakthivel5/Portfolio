import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";
import redux from "../../public/redux.png";
import nodejs from "../../public/node.png";
import expressjs from "../../public/express-js.png";
import mongodb from "../../public/mongodb.jpg";
import sql from "../../public/sql.png";
import cpp from "../../public/cpp.png";
import git from "../../public/git.png";

function Skills() {
    const cardItem = [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: javascript, name: "JavaScript" },
        { id: 4, logo: react, name: "React" },
        { id: 5, logo: redux, name: "Redux" },
        { id: 6, logo: nodejs, name: "Node.js" },
        { id: 7, logo: expressjs, name: "Express.js" },
        { id: 8, logo: mongodb, name: "MongoDB" },
        { id: 9, logo: sql, name: "SQL" },
        { id: 10, logo: java, name: "Java" },
        { id: 11, logo: cpp, name: "C++" },
        { id: 12, logo: git, name: "Git" },
    ];

    return (
        <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Skills</h1>
                
                <div className="grid grid-cols-2 md:grid-cols-8 gap-7">
                    {cardItem.map(({ id, logo, name }) => (
                        <div
                            key={id}
                            className="card-item flex flex-col items-center justify-center bg-white border border-gray-200 rounded-full p-2 md:p-4 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition duration-300"
                        >
                            <img
                                src={logo}
                                alt={name}
                                className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover"
                            />
                            <div className="mt-2 text-center">{name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
