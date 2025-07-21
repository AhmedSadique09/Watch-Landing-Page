import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FiShoppingCart } from "react-icons/fi";

export default function WatchSaleBanner() {
    const { theme } = useSelector((state: RootState) => state.theme);

    return (
        <section
            id="watch-sale-banner"
            className={`${theme === "dark" ? "bg-[#18181b]" : "bg-[#ffffff]"} px-4 sm:px-8 relative`}>
            <div className="container py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
                    {/* Left section */}
                    <div className="text-center lg:text-left max-w-xl z-20">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Limited Time Offer!</h2>
                        <p className="text-sm sm:text-base mb-6">
                            Get 20% off on all watches. Use code <span className="font-semibold">WATCH20</span> at checkout.
                        </p>

                        {/* Wrapper for responsive button alignment */}
                        <div className="flex justify-center lg:justify-start">
                            <button className={`flex items-center justify-center gap-2 text-sm font-medium px-4 py-1.5 rounded-lg transition
                                ${theme === "light"
                                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                                }`}>
                                Shop Now
                                <FiShoppingCart className="text-lg" />
                            </button>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="mb-8 lg:mb-0">
                        <img
                            src="/images/all watch.png"
                            alt="Watch"
                            className="w-[280px] sm:w-[300px] md:w-[350px] lg:w-[700px] opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
