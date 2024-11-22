// src/components/PortfolioBuilder/LayoutSelector/layouts/SinglePageStyle.tsx
import React from "react";

const SinglePageStyle: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white p-8 text-center sticky top-0 z-10">
        <nav className="flex justify-center space-x-4">
          <button onClick={() => scrollToSection("skills")} className="hover:underline">
            Skills
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:underline">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:underline">
            Contact
          </button>
        </nav>
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="mt-2">Full Stack Developer</p>
      </header>
      <section id="skills" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>GraphQL</li>
        </ul>
      </section>
      <section id="projects" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg">Project 1</div>
          <div className="bg-gray-200 p-4 rounded-lg">Project 2</div>
        </div>
      </section>
      <section id="contact" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Email: john.doe@example.com</p>
      </section>
    </div>
  );
};

export default SinglePageStyle;
