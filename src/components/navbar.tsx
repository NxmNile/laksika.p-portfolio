

'use client'; 

import React, { useState } from 'react';

const navItems = ['Home', 'About', 'Project', 'Activity', 'Resume'];

const Navbar = () => {
  
  const [activeItem, setActiveItem] = useState('Home');

  return (
    
    <nav className="bg-white p-2 rounded-full shadow-lg w-[858px] h-13 flex justify-center">
      <ul className="flex items-center space-x-20">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveItem(item)}
              className={`
                px-6 py-3 rounded-full text-m font-bold transition-colors duration-300
                ${
                  activeItem === item
                    ? 'bg-[#A781FF] text-black hover:bg-[#7f68b9]' // Active state style
                    : 'text-gray-700 hover:bg-gray-100' // Inactive state + hover style
                }
              `}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;