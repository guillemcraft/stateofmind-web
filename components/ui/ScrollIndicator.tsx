"use client";

export function ScrollIndicator() {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-[#00f5ff] transition-colors cursor-pointer group"
      aria-label="Scroll to content"
    >
      <span className="text-sm uppercase tracking-widest">Scroll</span>
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
        <div className="w-1 h-3 bg-current rounded-full animate-bounce-subtle" />
      </div>
    </button>
  );
}
