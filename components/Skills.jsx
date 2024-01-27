import React from "react";

export default function Skills() {
  const skills = [
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
    { id: 5, name: "NodeJS" },
    { id: 6, name: "MongoDB" },
    { id: 7, name: "ExpressJS" },
    { id: 8, name: "Python" },
    { id: 9, name: "C++" },
    { id: 10, name: "C" },
    { id: 11, name: "Java" },
    { id: 12, name: "C#" },
    { id: 13, name: "SQL" },
    { id: 14, name: "Firebase" },
    { id: 15, name: "HTML5" },
    { id: 16, name: "CSS3" },
    { id: 17, name: "Sass" },
    { id: 18, name: "TypeScript" },
    { id: 19, name: "Redux" },
    { id: 20, name: "REST API" },
    { id: 21, name: "Git" },
    { id: 22, name: "Responsive Design" },
    { id: 23, name: "GraphQL" },
    { id: 24, name: "Docker" },
  ];
  return (
    <div className="md:p-14 p-3 flex flex-col gap-6">
      <div className="text-4xl">Skills</div>
      <div class="grid grid-cols-4 gap-4">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className=" p-2 text-center">
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
