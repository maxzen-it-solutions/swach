import React from 'react'
import shil2 from "../assets/shil2.jpg";
import saf2 from "../assets/saf2.jpg";
import icon3 from "../assets/icon3.png";
import bg1 from "../assets/bg1.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Greenbodythree() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div>
      <section className="relative py-16 sm:py-20 bg-[#667D60]">
        {/* Top left decorative image */}
        {/* <img
    src={icon2}
    alt="Decorative"
    className="absolute top-6 left-6 w-20 sm:w-28 md:w-32 opacity-80 pointer-events-none"
  /> */}

        {/* Bottom left background image */}
        <img
          src={bg1}
          alt="Decorative design"
          className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-[450px] lg:w-[400px] opacity-20 pointer-events-none"
        />

        {/* Bottom right decorative image */}
        <img
          src={icon3}
          alt="Decorative"
          className="absolute bottom-6 right-6 sm:right-20 w-20 sm:w-28 md:w-24 opacity-80 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
            <p className="text-xs sm:text-sm text-green-200 md:text-xl font-bold uppercase tracking-widest">
              Ancient Health Secrets
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-md">
              Harness the power of nature's finest.
            </h2>
            <p className="text-base sm:text-lg lg:text-lg text-gray-100 leading-relaxed drop-shadow-sm">
              Explore the profound health benefits of
              <span className="font-semibold text-yellow-300"> Saffron </span>
              and{" "}
              <span className="font-semibold text-yellow-300">
                Shilajit Resin
              </span>
              , two powerful supplements sourced from nature's purest environments.
            </p>

            {/* Benefits */}
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {[
                "Saffron for Mood - Enhances mood, reduces stress, and promotes relaxation.",
                "Shilajit for Vitality - Boosts energy levels and supports physical performance.",
              ].map((point, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold md:text-2xl text-base sm:text-lg">
                    {index + 1}. {point.split(" - ")[0]}
                  </h3>
                  <p className="text-gray-200 text-base sm:text-lg lg:text-lg leading-relaxed">
                    {point.split(" - ")[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images with animation */}
          <div className="md:w-1/2 relative h-auto md:h-[450px] flex justify-center items-center mt-10 md:mt-0">
            {/* Mobile: stacked images */}
            <div className="flex flex-col items-center gap-6 md:hidden">
              <motion.img
                src={saf2}
                alt="Organic 1"
                className="rounded-xl shadow-2xl w-48 sm:w-56"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={shil2}
                alt="Organic 2"
                className="rounded-xl shadow-2xl w-48 sm:w-56"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            {/* Desktop: overlapping images */}
            <div className="hidden md:block relative h-[450px] w-full">
              <motion.img
                src={saf2}
                alt="Organic 1"
                className="rounded-xl shadow-2xl w-64 md:w-72 absolute -top-12 right-0"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.img
                src={shil2}
                alt="Organic 2"
                className="rounded-xl shadow-2xl w-64 md:w-72 absolute bottom-0 left-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Greenbodythree
