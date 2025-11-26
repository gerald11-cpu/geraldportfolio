function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-gray-700 py-8 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Social Links */}
        {/* <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            Email
          </a>
        </div> */}

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Gerald Siriac</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
