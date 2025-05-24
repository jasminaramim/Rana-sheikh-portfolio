import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;
    const mailtoLink = `mailto:your-email@example.com?subject=New Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Simulate sending delay for better UX
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Get in touch with me for opportunities or inquiries
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gradient-to-br from-black/70 to-purple-900/30 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-purple-500/20 mx-auto"
      >
        <form onSubmit={handleSendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Name Input */}
            <div className="w-full relative">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className="w-full p-4 pt-6 rounded-xl bg-black/50 border border-purple-500/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all peer"
                value={formData.name}
                onChange={handleChange}
                aria-label="Your Name"
              />
              <label className="absolute left-4 top-2 text-purple-300/80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-purple-300 peer-focus:text-sm">
                Your Name
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 peer-focus:w-full"></div>
            </div>

            {/* Email Input */}
            <div className="w-full relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                required
                className="w-full p-4 pt-6 rounded-xl bg-black/50 border border-purple-500/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all peer"
                value={formData.email}
                onChange={handleChange}
                aria-label="Your Email"
              />
              <label className="absolute left-4 top-2 text-purple-300/80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-purple-300 peer-focus:text-sm">
                Your Email
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 peer-focus:w-full"></div>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              rows="6"
              placeholder=" "
              required
              className="w-full p-4 pt-8 rounded-xl bg-black/50 border border-purple-500/30 text-white/90 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none peer"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your Message"
            />
            <label className="absolute left-4 top-3 text-purple-300/80 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-purple-300 peer-focus:text-sm">
              Your Message
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 peer-focus:w-full"></div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`py-4 px-6 rounded-xl text-white font-medium text-lg transition-all duration-300 flex items-center justify-center ${
              isSubmitting
                ? "bg-purple-800/70 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_20px_rgba(130,69,236,0.5)]"
            }`}
            aria-label={isSubmitting ? "Sending Message" : "Send Message"}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;