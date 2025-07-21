// src/components/ScrollToTopButton.tsx
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="fixed z-50 p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg
     bg-primary/80 text-white dark:bg-[#202020]/50 dark:text-primary
     backdrop-blur-lg transition hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary
     bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
            >
                <FaArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            </button>

        )
    );
};

export default ScrollToTopButton;
