

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
    // Treat project subpages (like /whisker) as part of Project
    if (pathname.startsWith('/project') || pathname.startsWith('/whisker')|| pathname.startsWith('/hp_eval')|| pathname.startsWith('/cockroach')) {
      setActiveItem('Project');
      return;
    }

    const found = navItems.find((item) => routeMap[item] === pathname || (routeMap[item] !== '/' && pathname.startsWith(routeMap[item])));
    setActiveItem(found ?? 'Home');
  }, [pathname]);

  return (
    <nav className="bg-white p-1 sm:p-2 rounded-full shadow-lg w-full h-13 max-w-[858px] flex justify-center mx-auto shadow-neutral-950/50">
      <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-17 py-1 md:py-0">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              href={routeMap[item] ?? '#'}
              className={`px-2 sm:px-3 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-colors duration-300 ${
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