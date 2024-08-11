import React from 'react';
import { Card, CardBody, Typography, Icon } from "@material-tailwind/react";

const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Healer-Ji (Startup)",
      duration: "June 2023 - Nov 2023",
      description: [
        "Implemented component-based architecture to build scalable and reusable UI components.",
        "Enhanced website performance by optimizing JavaScript, minimizing bundle sizes, and implementing lazy loading for images and components.",
        "Contributed to the development and enhancement of user interfaces, focusing on improving the overall user experience.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Celebal Technology",
      duration: "April 2024 - June 2024",
      description: [
        "Developed and enhanced responsive web applications using React.js, optimizing performance and user experience.",
        "Collaborated with design and backend teams to integrate RESTful APIs and ensure seamless functionality.",
        "Performed cross-browser testing and debugging to ensure compatibility and smooth functionality on various browsers.",
      ],
    },
  ];

const Experience = () => {
  return (
    <div id='experience' className="w-[90%] lg:w-[80%] mx-auto py-12 px-2 lg:px-8 " >
      <Typography variant="h2" className="text-2xl md:text-4xl text-center font-bold mb-12">
        Experience
      </Typography>
      <div className="relative border-l-2 border-blue-600">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-5 lg:ml-6">
            <span className="absolute w-5 h-5 bg-red-500 rounded-full mt-1.5 -left-3 border border-white"></span>
            <Card className="" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <CardBody>
                <Typography variant="h5" className="mb-2">
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" className="text-gray-700">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" className="text-gray-500">
                  {exp.duration}
                </Typography>
                <Typography variant="body1" className="mt-4">
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
