// components/ScrollButton.js

import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-[#eee2dc] text-[#123c69] p-1 rounded-lg ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <BsArrowUpCircleFill className="text-4xl  text-[#ac3b61]" />
    </button>
  );
};

export default ScrollButton;
