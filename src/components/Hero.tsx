import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FiShoppingBag } from "react-icons/fi";

export default function Hero() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <section id="home" className={`min-h-screen py-20 md:py-25 flex items-center justify-center px-4 transition-colors duration-300 ${theme === "dark" ? "bg-[#1C1C1C]" : "bg-[#f7f7f7]"}`}>
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 px-1 md:pl-20">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-black"}`}>
            Briliant watch <br /> that inspire to <br /> explore life
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Built for those who value both <br className="hidden sm:block" />
            function and fashion.
          </p>

          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md transition-all duration-300 text-sm sm:text-base">
            <FiShoppingBag className="text-base sm:text-lg" />
            Add to Cart
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center justify-center w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-[22rem] xl:h-[22rem]">
          <div className="absolute inset-0 m-auto w-full h-full rounded-full bg-[radial-gradient(circle_at_center,_#ffcc00,_#ffaa00_60%,_#cc7700_90%)] blur-3xl opacity-60 scale-100 z-0" />
          <img
            src="/images/black watch.png"
            alt="watch"
            className="absolute inset-0 m-auto w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 xl:w-72 xl:h-72 object-contain z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>


      </div>
    </section>
  );
}

