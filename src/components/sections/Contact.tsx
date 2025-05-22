import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { PhoneIcon, MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot check (basic anti-spam)
    if (form.current['bot-field'].value) {
      alert("Bot submission blocked.");
      return;
    }

    emailjs
      .sendForm('service_1sowjwq', 'template_3srkx2p', form.current, 'mHHCxdznrifPi7pBg')
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <a href="tel:+919390030330" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  +91 93900 30330
                </a>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <MailIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <a href="mailto:brahmagnanisreeram@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  brahmagnanisreeram@gmail.com
                </a>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-8 mb-6">Social Links</h3>
           <div className="flex space-x-4">
  <a href="https://www.linkedin.com/in/sreeram-brahmagnani-31157a268/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300">
    <LinkedinIcon className="h-10 w-10" />
  </a>
  <a href="https://github.com/SreeramBrahmagnani" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300">
    <GithubIcon className="h-10 w-10" />
  </a>
  <a
    href="https://leetcode.com/u/brahmagnanisreeram/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      alt="LeetCode"
      className="h-10 w-10"
    />
  </a>
  <a
    href="https://www.geeksforgeeks.org/user/brahmagnancygx/?_gl=1*1yu5km3*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw0LDBBhCnARIsAMpYlAoibNRmiEywyrbqR1ZLQKUeA76hQDqApnk9030ppsqseeUHqS9XkwYaAkyTEALw_wcB&gbraid=0AAAAAC9yBkDH9Uge8UU-1AV6CxN2NEgVS"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
  >
    <img
      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
      alt="GeeksforGeeks"
      className="h-10 w-10 rounded"
    />
  </a>
</div>

          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Honeypot field (hidden from humans) */}
              <input type="text" name="bot-field" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input type="text" name="user_name" id="name" required placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input type="email" name="user_email" id="email" required placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea name="message" id="message" rows={5} required placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
              </div>
              <button type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
