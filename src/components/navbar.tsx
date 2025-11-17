

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = ['Home', 'About', 'Project', 'Activity', 'Resume'];

const routeMap: Record<string, string> = {
  Home: '/',
  About: '/about',
  Project: '/project',
  Activity: '/activity',
  Resume: '/resume',
};

const Navbar = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    if (!pathname) return;
    const found = navItems.find((item) => routeMap[item] === pathname || (routeMap[item] !== '/' && pathname.startsWith(routeMap[item])));
    setActiveItem(found ?? 'Home');
  }, [pathname]);

  return (
    <nav className="bg-white p-2 rounded-full shadow-lg w-[858px] h-13 flex justify-center shadow-neutral-950/50">
      <ul className="flex items-center space-x-20">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              href={routeMap[item] ?? '#'}
              className={`px-6 py-3 rounded-full text-m font-bold transition-colors duration-300 ${
                activeItem === item
                  ? 'bg-[#A781FF] text-black hover:bg-[#7f68b9]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;