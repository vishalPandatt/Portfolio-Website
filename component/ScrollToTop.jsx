"use client";
import { ArrowUpIcon } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-linear-to-br from-cyan-400 to-cyan-500 rounded-full text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-opacity-50 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </button>
      )}
    </>
  );
};
export default ScrollToTopButton;
