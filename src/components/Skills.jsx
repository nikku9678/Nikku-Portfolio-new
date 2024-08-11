import React from 'react';

const skills = [
  {
    name: 'Frontend',
    images: [
      './images/skills/html.png',
      './images/skills/css.png',
      './images/skills/javascript.png',
      './images/skills/reactjs.png',
      './images/skills/tailwind.png',
    ],
  },
  {
    name: 'Backend',
    images: [
      './images/skills/node.png',
      './images/skills/express.png',
      './images/skills/mongodb.png',
      './images/skills/mysql.png',
      './images/skills/firebase.png',
    ],
  },
  {
    name: 'Tools',
    images: [
      './images/skills/git.png',
      './images/skills/github.png',
      './images/skills/docker.png',
      './images/skills/linux.png',
      './images/skills/vscode.png',
    ],
  },
  
];

const SkillCards = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-center items-center flex-col min-h-screen bg-gray-100 py-4">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl p-6 text-center
            ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
          >
            <h1 className="text-xl font-bold mb-4">{skill.name}</h1>
            <div className="flex justify-center flex-wrap gap-4">
              {skill.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${skill.name} skill`}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
