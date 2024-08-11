import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { data } from '../../data/project';
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? data
    : data.filter(project => project.category === selectedCategory);

  // Show only the number of projects determined by visibleCount
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div id="projects" className="max-w-[90%] md:max-w-[80%] mx-auto py-16 pb-8">
      <h1 className="md:text-4xl text-3xl font-bold mb-8 mx-4">Projects</h1>
      
      <div className="flex mb-8 gap-0 mx-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`py-2 md:px-5 px-4 mx-1 md:mx-2 font-medium text-sm md:text-sm rounded-md ${selectedCategory === "All" ? "bg-btnColor text-white" : "bg-gray-200 text-black"}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Frontend")}
          className={`md:px-5 px-4 mx-1 md:mx-2 font-medium text-sm md:text-sm rounded-md ${selectedCategory === "Frontend" ? "bg-btnColor text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSelectedCategory("Backend")}
          className={`md:px-5 px-4 mx-1 md:mx-2 font-medium text-sm md:text-sm rounded-md ${selectedCategory === "Backend" ? "bg-btnColor text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Backend
        </button>
        <button
          onClick={() => setSelectedCategory("Mern-Stack")}
          className={`md:px-5 px-4 mx-1 md:mx-2 font-medium text-sm md:text-sm rounded-md ${selectedCategory === "Mern-Stack" ? "bg-btnColor text-white" : "bg-gray-200 text-gray-800"}`}
        >
          Mern Stack
        </button>
      </div>

      <div className="flex flex-wrap gap-0">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            Img={project.Img}
            link={project.demo}
            github={project.github}
            tag={project.tag}
            tools={project.tools}
          />
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-8 items-center">
          <button
            onClick={loadMoreProjects}
            className="bg-btnColor rounded-3xl text-white py-3 px-6 flex gap-4 item-center justify-center"
          >
            Load More
            <FaArrowRight className="mt-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
