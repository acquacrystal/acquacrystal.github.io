import React from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {Button} from "../components/ui/button.js";
import videoSrc from "../assets/images/portfoliovid3.mp4";
import "../styles/instanthook.css";
import Showcase from "./Showcase.js";
import SocialProof from "./SocialProof.js";
import "../styles/socialproof.css";
import ValueShowcase2 from "./ValueShowcase2.js";
import Trust from "./Trust.js";

export default function InstantHook() {
  const navigate = useNavigate();
  return (
    <section className="w-full px-0 bg-black">
      {/* Isolate Instant Hook from General Container */}
      <div className="instant-hook-container">
        <section className="instant-hook px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto px-4 md:px-8 text-white">
            <motion.h1
              initial={{opacity: 0, y: -30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="text-2xl md:text-4xl font-bold text-yellow-400"
            >
              Elevate Your Brand with a Website That Sells!
            </motion.h1>
            <motion.p
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.8}}
              className="text-sm md:text-lg mt-4"
            >
              We craft high-converting, luxury-grade websites designed to turn
              visitors into loyal customers.
            </motion.p>
          </div>
          {/* Video Section */}
          <div className="w-full flex justify-center mt-8">
            <motion.div
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 0.8}}
              className="video-container"
            >
              <video
                autoPlay
                muted
                loop
                src={videoSrc}
                className="w-full"
              ></video>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Other Sections Maintaining Full Width */}
      <div className="mt-12 w-full">
        <SocialProof />
      </div>
      <div className="text-center mt-12 w-full">
        <button
          onClick={() => navigate("/contact")}
          className="cta-button py-3 px-6 text-lg md:text-xl"
        >
          Get Your Premium Website Now
        </button>
      </div>
      <div className="mt-16 w-full">
        <Showcase />
      </div>
      <ValueShowcase2 />
      <Trust />
    </section>
  );
}
