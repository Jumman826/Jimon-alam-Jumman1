
'use client';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern online store with payment integration and inventory management',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20clean%20product%20showcase%20with%20shopping%20cart%2C%20professional%20web%20design%20with%20blue%20and%20white%20color%20scheme%2C%20elegant%20product%20grid%20layout%2C%20contemporary%20online%20store%20design%2C%20high-quality%20web%20development%20project%20display&width=600&height=400&seq=portfolio-1&orientation=landscape',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with responsive design and SEO optimization',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20displayed%20on%20desktop%20computer%2C%20clean%20business%20web%20design%20with%20modern%20layout%2C%20professional%20company%20homepage%20with%20navigation%20menu%2C%20contemporary%20business%20website%20interface%2C%20sleek%20corporate%20web%20design%20with%20organized%20content%20sections&width=600&height=400&seq=portfolio-2&orientation=landscape',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Restaurant App',
      description: 'Food ordering application with menu management and online payments',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20food%20ordering%20website%20on%20tablet%20device%2C%20modern%20food%20menu%20interface%20with%20appetizing%20dishes%2C%20clean%20restaurant%20web%20app%20design%20with%20order%20functionality%2C%20professional%20food%20delivery%20website%20layout%2C%20contemporary%20dining%20website%20design&width=600&height=400&seq=portfolio-3&orientation=landscape',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio showcasing photography and design work',
      image: 'https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20displayed%20on%20laptop%2C%20artistic%20web%20design%20showcasing%20visual%20work%2C%20modern%20portfolio%20layout%20with%20image%20galleries%2C%20professional%20creative%20website%20interface%2C%20contemporary%20designer%20portfolio%20web%20design&width=600&height=400&seq=portfolio-4&orientation=landscape',
      technologies: ['Gatsby', 'GraphQL', 'Netlify']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of my recent projects that showcase my skills and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
