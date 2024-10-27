import React from 'react';

function Technologies() {
  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Keras', 'React', 
    'JavaScript', 'HTML', 'CSS', 'Docker', 'AWS', 'Git', 'Machine Learning', 'Deep Learning'
  ];

  return (
    <section id="technologies" className="py-10 bg-black text-center text-purple-300">
      <h2 className="text-3xl font-bold mb-6">Technologies</h2>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-slide flex space-x-8">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-lg text-purple-300"
            >
              {tech}
            </span>
          ))}
          {/* Duplicate list to create an infinite loop effect */}
          {techStack.map((tech, index) => (
            <span
              key={`duplicate-${index}`}
              className="px-4 py-2 bg-gray-800 rounded-full text-lg text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
