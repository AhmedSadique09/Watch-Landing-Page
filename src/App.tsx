import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import WatchSaleBanner from "./components/WatchSaleBanner";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main" className="main">
        <Hero />
        <Feature />
        <Pricing />
        <WatchSaleBanner />
        <Reviews />
      </main>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}
