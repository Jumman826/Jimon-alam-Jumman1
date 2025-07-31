
'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20web%20developer%20workspace%20with%20clean%20minimalist%20design%2C%20elegant%20computer%20setup%20with%20coding%20environment%20on%20screen%2C%20soft%20natural%20lighting%20from%20window%2C%20contemporary%20office%20interior%20with%20plants%20and%20modern%20furniture%2C%20professional%20atmosphere%20with%20blue%20and%20white%20color%20scheme%2C%20high-tech%20workspace%20aesthetic%2C%20clean%20background%20suitable%20for%20overlay%20text&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-blue-400">Website Developer</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            I create stunning, responsive websites that drive results. From concept to deployment, 
            I bring your digital vision to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
            >
              Get In Touch
            </a>
            <a 
              href="#portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
