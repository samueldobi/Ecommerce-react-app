"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import gadget1 from "../images/products/gadget-1.jpg";
import gadget2 from "../images/products/gadget-2.jpg";
import gadget3 from "../images/products/gadget-3.jpg";
import gadget4 from "../images/products/gadget-4.jpg";
import gadget5 from "../images/products/gadget-5.jpg";
import gadget6 from "../images/products/gadget-6.jpg";
import { useOutsideClick } from "../hooks/use-outside-click";

export const AllProductsContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const AllProducts = ({ items, initialScroll = 0 }) => {
  const allProductsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (allProductsRef.current) {
      allProductsRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (allProductsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = allProductsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (allProductsRef.current) {
      allProductsRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (allProductsRef.current) {
      allProductsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (allProductsRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      allProductsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <div ref={allProductsRef}>
     <img src={gadget1} alt="Hero Product" className="hero-image" />  
     <img src={gadget2} alt="Hero Product" className="hero-image" />  
    </div>
  );
};

export default AllProducts;