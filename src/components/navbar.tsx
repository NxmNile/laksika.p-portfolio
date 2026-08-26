'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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
    if (pathname.startsWith('/project') || pathname.startsWith('/whisker')|| pathname.startsWith('/hp_eval')|| pathname.startsWith('/cockroach')|| pathname.startsWith('/carbon')|| pathname.startsWith('/chicken')|| pathname.startsWith('/peach')|| pathname.startsWith('/drake')|| pathname.startsWith('/mellowlife')|| pathname.startsWith('/ecig')) {
      setActiveItem('Project');
      return;
    }

    const found = navItems.find((item) => routeMap[item] === pathname || (routeMap[item] !== '/' && pathname.startsWith(routeMap[item])));
    setActiveItem(found ?? 'Home');
  }, [pathname]);

  return (
    <nav
      className="flex items-center gap-1 p-1.5 sm:p-2 rounded-full w-full max-w-[858px] mx-auto"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow:
          '0 8px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 0 40px rgba(167, 129, 255, 0.18)',
      }}
    >
      <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 w-full py-1 md:py-0">
        {navItems.map((item) => (
          <li key={item} className="relative">
            <Link
              href={routeMap[item] ?? '#'}
              className={`relative z-10 block px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-colors duration-300 ${
                activeItem === item ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              {item}
            </Link>
            {activeItem === item && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(120deg, var(--accent-purple), rgba(167, 129, 255, 0.75) 60%, var(--accent-cyan))',
                  boxShadow: '0 4px 18px rgba(167, 129, 255, 0.55)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
