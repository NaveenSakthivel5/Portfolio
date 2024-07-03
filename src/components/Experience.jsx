import React from "react";

function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Software Engineer",
            company: "Persistent Systems",
            description: [
                "Spearheaded front-end development for Quickbooks website using HTML5, CSS3, JavaScript, ReactJS, and other technologies.",
                `Developed e-commerce website for Quickbooks (<a href="https://intuitmarket.intuit.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Intuit Market</a>) using HTML5, CSS3, JavaScript, and ReactJS, providing comprehensive use cases for business, functional, and technical requirements.`,
                "Implemented coding, testing, and review procedures to meet stringent project requirements and industry standards.",
                "Utilized manual testing to ensure robustness and reliability of web applications.",
                "Applied responsive design techniques, significantly boosting mobile user engagement and reducing bounce rates.",
                "Coordinated with clients and testing teams to optimize application performance.",
            ],
            website: "https://www.persistent.com/",
        },
        
    ];

    return (
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Work Experience</h1>
                
                {experiences.map((experience) => (
                    <div key={experience.id} className="mb-8">
                        <h2 className="text-xl font-bold">{experience.title}</h2>
                        <p className="text-lg font-semibold">{experience.company}</p><a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {experience.website}
                        </a>
                        <ul className="list-disc ml-4 mt-2">
                            {experience.description.map((point, index) => (
                                <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: point }} />
                            ))}
                        </ul>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
