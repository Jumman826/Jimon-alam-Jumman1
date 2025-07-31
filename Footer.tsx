
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "Pacifico, serif" }}>
              WebDev Pro
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional web developer creating exceptional digital experiences 
              that drive business growth and user engagement.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/8801989885289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/1BVfPrmA7o/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a 
                href="https://www.instagram.com/invites/contact/?igsh=1dnq3zxic00ek&utm_content=ywig4r1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a 
                href="mailto:jimonalamjumman@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            2024 Professional Web Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
