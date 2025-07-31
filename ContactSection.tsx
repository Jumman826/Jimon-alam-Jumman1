
'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Work Together</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <a 
                    href="https://wa.me/8801989885289" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    +880 1989 885 289
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                  <i className="ri-facebook-fill text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Facebook</h4>
                  <a 
                    href="https://www.facebook.com/share/1BVfPrmA7o/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    Visit My Profile
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                  <i className="ri-instagram-fill text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/invites/contact/?igsh=1dnq3zxic00ek&utm_content=ywig4r1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    Follow Me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a 
                    href="mailto:jimonalamjumman@gmail.com"
                    className="text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    jimonalamjumman@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Quick Response Guaranteed</h4>
              <p className="text-gray-600">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                WhatsApp is the fastest way to reach me.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <div className="relative">
                  <select 
                    name="project_type"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">New Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
