import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
  };

  return (
    <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg border border-[#333] w-full">
      <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Contact Form</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#252525] border-gray-600 shadow-sm focus:border-[#FF4500] focus:ring focus:ring-[#FF4500] focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#252525] border-gray-600 shadow-sm focus:border-[#FF4500] focus:ring focus:ring-[#FF4500] focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#252525] border-gray-600 shadow-sm focus:border-[#FF4500] focus:ring focus:ring-[#FF4500] focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-[#febf5f] text-white py-2 px-4 rounded-md hover:bg-[#646461] transition duration-300">
            Send Message!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;