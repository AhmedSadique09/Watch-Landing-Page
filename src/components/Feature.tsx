import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Feature() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const isDark = theme === "dark";

  const features = [
    {
      title: "Crystal Clear Display",
      desc: `Enjoy vibrant AMOLED screen clarity even in direct sunlight.Experience true-to-life colors with deep blacks and high contrast.Whether indoors or outdoors, your screen stays crisp.Perfect for reading notifications and health stats anytime.Now with a 20% brighter panel for improved visibility.`,
    },
    {
      title: "Health Monitoring",
      desc: `Track your heart rate, sleep, and blood oxygen 24/7.Stay updated on your daily activity and fitness goals.Get personalized insights into your wellness trends.Designed to keep your health in check every moment.New AI-powered recommendations for better sleep and recovery.`,
    },
    {
      title: "Durable & Waterproof",
      desc: `Designed to handle dust, sweat, and unexpected rain.Built with premium materials for all-day rugged use.Swim-proof and shock-resistant for outdoor activities.Ready for workouts, travel, or your daily routine.Tested for extreme temperatures and challenging conditions.`,
    },
    {
      title: "Smart Connectivity",
      desc: `Receive notifications, calls, and control music right from your wrist.Seamless syncing with your smartphone for updates on the go.Access voice assistants and weather in a tap.Stay connected without touching your phone.Compatible with the latest apps and Bluetooth devices.`,
    },
  ];

  return (
    <section
      id="feature"
      className={`py-10 md:py-20 transition-colors duration-300 ${isDark ? "bg-[#202020]" : "bg-[#ffffff]"
        }`}
    >
      <div className="container px-4 sm:px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`font-bold ${isDark ? "text-white" : "text-gray-900"
              }`}
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
          >
            Product Features
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"
              }`}
            style={{ fontSize: "clamp(0.85rem, 2vw, 1.2rem)" }}
          >
            Discover what makes our smartwatch a perfect companion for your lifestyle — smart,
            stylish, and truly personal.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12">
          {/* Image */}
          <div className="w-40 xs:w-52 sm:w-72 md:w-80 flex-shrink-0">
            <img
              src="/images/feature watch.png"
              alt="Smart Watch"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 sm:p-5 md:p-6 text-left shadow-sm hover:shadow-md transition-shadow h-auto flex flex-col justify-start ${isDark
                    ? "border-yellow-600 bg-[#2a2a2a] text-gray-200"
                    : "border-yellow-400 bg-white text-gray-800"
                  }`}
              >
                <h3
                  className="font-semibold mb-2 sm:mb-3"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-snug sm:leading-relaxed whitespace-pre-line break-words"
                  style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
