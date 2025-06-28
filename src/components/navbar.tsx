

'use client'; 

import React, { useState } from 'react';

const navItems = ['Home', 'About', 'Project', 'Activity', 'Resume'];

const Navbar = () => {
  
  const [activeItem, setActiveItem] = useState('Home');

  return (
    
    <nav className="bg-white p-2 rounded-full shadow-lg">
      <ul className="flex items-center space-x-2">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveItem(item)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  activeItem === item
                    ? 'bg-[#c5b3ff] text-black' // Active state style
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