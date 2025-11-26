import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="w-full px-5 py-20 bg-zinc-300">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12">Contact</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Email */}
          <a
            href="mailto:geraldsiriac@gmail.com"
            className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors px-5 py-3 rounded-xl shadow-md transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaEnvelope className="h-6 w-6 text-blue-400" />
            <span className="text-white font-medium text-sm sm:text-base">
              geraldsiriac@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+918547369701"
            className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors px-5 py-3 rounded-xl shadow-md transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaPhone className="h-6 w-6 text-blue-400" />
            <span className="text-white font-medium text-sm sm:text-base">
              +918547369701
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gerald11-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors px-5 py-3 rounded-xl shadow-md transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaGithub className="h-6 w-6 text-blue-400" />
            <span className="text-white font-medium text-sm sm:text-base">
              gerald11-cpu
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/geraldsiriac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-colors px-5 py-3 rounded-xl shadow-md transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaLinkedin className="h-6 w-6 text-blue-400" />
            <span className="text-white font-medium text-sm sm:text-base">
              linkedin.com/in/geraldsiriac
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
