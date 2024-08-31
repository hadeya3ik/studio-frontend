'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header'

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const [hiddenNav, setHiddenNav] = useState(false);
  const [previousScrollYProgress, setPreviousScrollYProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = previousScrollYProgress;
    if (latest > previous) {
      setHiddenNav(true);
    } else {
      setHiddenNav(false);
    }
    setPreviousScrollYProgress(latest);
  });


  return (
    <motion.nav
      className='md:p-12 sm:p-8 p-4 sticky top-0 flex justify-between z-50 text-gray-700 '
      >
        <motion.h1 
        variants={{
          visible: { y: 0, opacity : 1 },
          hidden: { y: '0%', opacity : 0 },
          initial: { 
            y: '-50%',
            opacity : 0
          },
        }}
        initial="initial"
        animate={hiddenNav ? 'hidden' : 'visible'}
        transition={{ duration: 0.8, ease: 'easeInOut' }} 
        className='text-3xl  mix-blend-difference '>
        BRAND</motion.h1>
        <Header/>
    </motion.nav>
  );
}

export default NavBar;
