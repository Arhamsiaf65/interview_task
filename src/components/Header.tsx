import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto w-full font-sans">
      {/* Logo Area */}
      <div className="flex items-center cursor-pointer mr-8 sm:mr-16">
        {/* Setapp Logo: 4 diamonds */}
        <div className="grid grid-cols-2 gap-[2px] transform rotate-0">
          {/* Top Row */}
          <div className="w-1.5 h-1.5 bg-[#dcb689] transform rotate-45 mb-[1px]"></div>
          <div className="w-1.5 h-1.5 bg-[#dcb689] transform rotate-45 mb-[1px]"></div>
          {/* Bottom Row - offset slightly if needed for exact shape, but diamonds usually just grid */}
          <div className="w-1.5 h-1.5 bg-[#dcb689] transform rotate-45 mt-[1px]"></div>
          <div className="w-1.5 h-1.5 bg-[#dcb689] transform rotate-45 mt-[1px]"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-6 text-[13px] tracking-wide font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">How it works</a>
        <a href="#" className="hover:text-white transition-colors">All apps</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">For Teams</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
        <a href="#" className="hover:text-white transition-colors">Podcast</a>

        <div className="h-3 w-px bg-gray-600 mx-1"></div>

        {/* Language Flag (USA) */}
        <div className="flex items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            className="w-4 h-auto rounded-[1px]"
            alt="US"
          />
        </div>

        <a href="#" className="hover:text-white transition-colors ml-1">Sign In</a>
      </nav>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-5 py-2 border border-[#4b4b50] rounded-lg text-xs font-medium text-gray-200 hover:border-white hover:text-white transition-all tracking-wide">
          Try free
        </button>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-gray-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
