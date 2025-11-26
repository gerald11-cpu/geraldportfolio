function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-zinc-300">Gerald Siriac</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
