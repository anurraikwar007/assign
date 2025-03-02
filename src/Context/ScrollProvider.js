// ScrollProvider.js
import React, { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Create a context
const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5, // Adjust scroll speed if needed
    });

    // ScrollTrigger integration with Locomotive Scroll
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          locoScroll.scrollTo(value, 0, 0); // Scroll to specific position
        }
        return locoScroll.scroll.instance.scroll.y; // Get current scroll position
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    // Refresh ScrollTrigger when Locomotive Scroll updates
    locoScroll.on('scroll', ScrollTrigger.update);

    // Cleanup on unmount
    return () => {
      locoScroll.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
