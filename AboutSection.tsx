
'use client';

export default function AboutSection() {
  const skills = [
    'HTML5 & CSS3', 'JavaScript & TypeScript', 'React & Next.js',
    'Node.js & Express', 'MongoDB & PostgreSQL', 'Responsive Design',
    'SEO Optimization', 'Performance Optimization', 'API Integration'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web developer with over 5 years of experience creating 
              digital solutions that make a difference. My expertise spans from front-end 
              design to back-end development, ensuring every project is built with 
              precision and attention to detail.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in creating modern, user-friendly websites that not only look 
              great but also perform exceptionally well. Every line of code is crafted 
              with performance, security, and scalability in mind.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
                  <span className="text-sm font-medium text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20web%20developer%20portrait%20in%20modern%20office%20environment%2C%20confident%20person%20working%20on%20laptop%20with%20clean%20workspace%2C%20contemporary%20professional%20headshot%20with%20soft%20lighting%2C%20modern%20business%20attire%2C%20warm%20and%20approachable%20expression%2C%20clean%20background%20with%20subtle%20tech%20elements%2C%20high-quality%20professional%20photography%20style&width=600&height=700&seq=about-image&orientation=portrait"
              alt="Professional Developer"
              className="rounded-lg shadow-xl w-full object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
