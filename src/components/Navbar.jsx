import GooeyNav from "./GooeyNav";

function Navbar() {
  const items = [
    { label: "About", href: "#about" },

    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-zinc-300 me-5">Gerald Siriac</h1>

        <div
          style={{ height: "10px", position: "relative" }}
          className="mb-5 shadow-white"
        >
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
