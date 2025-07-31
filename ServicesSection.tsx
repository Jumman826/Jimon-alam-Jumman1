
'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technologies like React, Next.js, and responsive design principles.',
      icon: 'ri-code-s-slash-line'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with payment integration, inventory management, and user-friendly interfaces.',
      icon: 'ri-shopping-cart-2-line'
    },
    {
      title: 'Mobile-First Design',
      description: 'Responsive websites that look and work perfectly on all devices, from smartphones to desktops.',
      icon: 'ri-smartphone-line'
    },
    {
      title: 'SEO Optimization',
      description: 'Search engine optimization to help your website rank higher and attract more organic traffic.',
      icon: 'ri-search-line'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast-loading websites with optimized code, images, and caching for the best user experience.',
      icon: 'ri-speed-up-line'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
      icon: 'ri-settings-3-line'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive web development services to help your business succeed online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg mb-6">
                <i className={`${service.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
