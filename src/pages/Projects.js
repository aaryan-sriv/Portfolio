import React from 'react';

const projects = [
  { title: 'Responsive Portfolio', description: 'A fully responsive portfolio website made using ReactJS, HTML, Tailwind CSS and JavaScript.', link: 'https://github.com/aaryan-sriv/Portfolio' },
  { title: 'Amazon Fine Food Reviews', description: 'A ML model that predicts the reveiws of Amazon food products.models include Logistic Regression, Naive Bayes, Random Forest and K-Nearest Neighbour', link: 'https://github.com/aaryan-sriv/Amazon-Fine-Food-Reviews' },
  { title: 'Morse Code Audio', description: 'A python code for converting alphabets into Morse Code using Audio', link:'https://github.com/aaryan-sriv/Morse-Code-Audio-'},
  { title: 'Computer Hardware Analysis', description: 'Project to analyze the computer hardware datasets to get accurate price predictions.', link:'https://github.com/aaryan-sriv/Computer-Hardware-Analysis'},
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen p-10 bg-black text-center text-purple-300">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href='https://github.com/aaryan-sriv/Amazon-Fine-Food-Reviews' className="text-purple-400 hover:text-purple-500 mt-2 inline-block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
