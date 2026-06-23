import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactProps {
  darkMode?: boolean;
}

function Contact({ darkMode = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-gray-100" : "text-slate-800"} mb-4`}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p
            className={`${darkMode ? "text-gray-400" : "text-slate-600"} mt-4 max-w-2xl mx-auto`}
          >
            I'm always open to discussing new projects, opportunities, or
            collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg transition-colors ${darkMode ? "bg-blue-900/50 group-hover:bg-blue-800/50" : "bg-blue-50 group-hover:bg-blue-100"}`}
                >
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:your.email@example.com"
                    className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"} transition-colors`}
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg transition-colors ${darkMode ? "bg-cyan-900/50 group-hover:bg-cyan-800/50" : "bg-cyan-50 group-hover:bg-cyan-100"}`}
                >
                  <Phone className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className={`${darkMode ? "text-gray-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"} transition-colors`}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg transition-colors ${darkMode ? "bg-blue-900/50 group-hover:bg-blue-800/50" : "bg-blue-50 group-hover:bg-blue-100"}`}
                >
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                  >
                    Location
                  </h3>
                  <p
                    className={`${darkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    City, State, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-2 rounded-2xl p-8 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div
                  className={`p-4 rounded-full mb-4 ${darkMode ? "bg-green-900/50" : "bg-green-50"}`}
                >
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-slate-800"}`}
                >
                  Message Sent!
                </h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-slate-600"} text-center`}
                >
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow ${darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-slate-300"}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow ${darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-slate-300"}`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow ${darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-slate-300"}`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-none ${darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-white border-slate-300"}`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
