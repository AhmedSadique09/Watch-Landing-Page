import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Emily Johnson",
    company: "Verified Buyer",
    image: "/images/people-1.jpg",
    rating: 5,
    quote:
      "This smartwatch is exactly what I needed. The fitness tracking is super accurate and the display looks stunning.I’ve received\n so many compliments!",
  },
  {
    name: "David Miller",
    company: "Verified Buyer",
    image: "/images/people-2.jpg",
    rating: 4,
    quote:
      "Comfortable to wear and easy to navigate. Notifications sync well with my phone.\nBattery life could be better, but still a solid purchase.",
  },
  {
    name: "Olivia Brown",
    company: "Verified Buyer",
    image: "/images/people-3.jpg",
    rating: 5,
    quote:
      "I’ve tried several smartwatches before, but this one stands out.Smooth performance,\n great app integration, and beautiful design.",
  },
  {
    name: "Liam Wilson",
    company: "Verified Buyer",
    image: "/images/people-4.jpg",
    rating: 4,
    quote:
      "I use this watch every day for work and workouts.Steps, heart rate, sleep all\n tracked accurately. Definitely impressed.",
  },
  {
    name: "Sophia Davis",
    company: "Verified Buyer",
    image: "/images/people-5.jpg",
    rating: 5,
    quote:
      "Absolutely love the interface and the customizable watch faces.Feels premium on the wrist and handles everything I need.",
  },
  {
    name: "James Anderson",
    company: "Verified Buyer",
    image: "/images/people-6.jpg",
    rating: 5,
    quote:
      "Didn’t expect this level of quality at this price.Fast, reliable, and looks like a high end gadget. Highly recommended.",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const { theme } = useSelector((state: RootState) => state.theme);

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} id="reviews" className="px-4 sm:px-8 py-10 md:py-20">
      <div className="container mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-8  text-center ${theme === "light"
          ? "from-[#202016] to-gray-900"
          : "from-white to-gray-300"
          }`}>
          What Our Customers Saying
        </h2>

        <div className="relative w-full overflow-hidden">
          {isInView && (
            <motion.div
              className="flex gap-4 sm:gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {loopTestimonials.map((t, index) => (
                <div
                  key={`${t.name}-${index}`} className={`w-[85vw] sm:w-[250px] md:w-[350px] flex-shrink-0 p-4 sm:p-5 rounded-2xl shadow-md ${theme === "light"
                    ? "bg-[#ffffff] text-black border border-gray-400 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    : "bg-[#202024] text-white border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
                    }`}
                >
                  <div>
                    <div className="flex items-center mb-2 sm:mb-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
                      />
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold">
                          {t.name}
                        </h3>
                        <p
                          className={`text-[10px] sm:text-xs ${theme === "light" ? "text-gray-700" : "text-gray-400"
                            }`}>
                          {t.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs sm:text-sm mb-2 sm:mb-3">
                      {"★".repeat(t.rating)}
                    </div>
                    <p
                      className={`text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed whitespace-pre-line ${theme === "light" ? "text-gray-800" : "text-gray-300"
                        }`}>
                      {t.quote}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
