"use client";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function ScrollTo() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log(scrollYProgress);
    return scrollYProgress.on("change", (latestValue) => {
      console.log(latestValue);
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.screenY > 100) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined";
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed bottom-0 right-0 p-10"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <ArrowUpCircleIcon className="h-10 w-10 text-[#F7AB0A] animate-pulse" />
    </motion.button>
  );
}

export default ScrollTo;
