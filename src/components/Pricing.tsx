import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { FiShoppingCart } from "react-icons/fi";


export default function Pricing() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const colorMap: Record<string, string> = {
    Black: "rgba(0, 0, 0, 0.2)",
    Teal: "rgba(0, 0, 0, 0.2)",
    Red: "rgba(0, 0, 0, 0.2)",
    Pink: "rgba(0, 0, 0, 0.2)",
    Blue: "rgba(0, 0, 0, 0.2)",
    Yellow: "rgba(0, 0, 0, 0.2)",
  };

  const watches = [
    { color: "Black", price: "$450.00", img: "/images/black watch.png" },
    { color: "Teal", price: "$450.00", img: "/images/teal watch.png" },
    { color: "Red", price: "$450.00", img: "/images/red watch.png" },
    { color: "Pink", price: "$450.00", img: "/images/pink watch.png" },
    { color: "Blue", price: "$450.00", img: "/images/blue watch.png" },
    { color: "Yellow", price: "$450.00", img: "/images/yellow watch.png" },
  ];

  return (
    <section id="pricing" className={`transition-colors duration-300 px-4 sm:px-8 ${theme === "light" ? "bg-[#f7f7f7] text-black" : "bg-[#1C1C1C] text-white"}`}>
      <div className="container py-10 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">We Have Quality Products</h2>
          <p className={`text-sm sm:text-base mt-2 max-w-2xl mx-auto ${theme === "light" ? "text-gray-900" : "text-gray-200"}`}>
            Discover smart, durable, and cutting-edge designs tailored to fit your lifestyle. Our commitment to quality ensures that every product delivers style and performance—without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {watches.map((watch, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden shadow-md transition-colors duration-300 ${theme === "light" ? "bg-gray-100" : "bg-[#2E2E2E]"}`}>
              <div className="relative p-6 flex justify-center items-center">
                <div
                  className="absolute inset-0 rounded-xl backdrop-blur-lg border border-white/10 shadow-inner"
                  style={{
                    backgroundColor: colorMap[watch.color],
                  }}>
                </div>

                <img
                  src={watch.img}
                  alt={`Smart Watch (${watch.color})`}
                  className="h-48 object-contain relative z-10"
                  loading="lazy"
                />
              </div>

              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">
                  Smart Watch ({watch.color})
                </h4>
                <p className="text-sm mt-1">
                  {watch.price}
                </p>
                <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow inline-flex items-center gap-2">
                  <FiShoppingCart className="text-lg" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
