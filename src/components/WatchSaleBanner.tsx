import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WatchSaleBanner() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const watchImages = [
    "/images/black watch.png",
    "/images/teal watch.png",
    "/images/red watch.png",
    "/images/pink watch.png",
    "/images/blue watch.png",
    "/images/yellow watch.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % watchImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [watchImages.length]);

  return (
    <section
      id="watch-sale-banner"
      className={`${theme === "dark" ? "bg-[#18181b]" : "bg-[#ffffff]"} px-4 sm:px-8 relative`}
    >
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 gap-6 lg:gap-8">
          
          {/* Left Section */}
          <div className="text-center lg:text-left max-w-xl z-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Limited Time Offer!</h2>
            <p className="text-sm sm:text-base mb-6">
              Get 20% off on all watches. Use code{" "}
              <span className="font-semibold">WATCH20</span> at checkout.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className={`flex items-center justify-center gap-2 text-sm font-medium px-4 py-1.5 rounded-lg transition
                ${theme === "light"
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                  }`}
              >
                Shop Now
                <FiShoppingCart className="text-lg" />
              </button>
            </div>
          </div>

          {/* Right Section - Fixed Height Wrapper */}
          <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={watchImages[current]}
                alt="Watch"
                className="w-full h-auto object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
