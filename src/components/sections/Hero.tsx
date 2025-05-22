import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './index.css';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import { HiSparkles } from 'react-icons/hi2';

function ChatbotButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMobileClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="relative group w-max mx-auto p-[7px] rounded-[1.2em] animated-border transition-all duration-400">
      <div className="glow-effect"></div>

      {/* Tooltip for desktop */}
      <div
        className="absolute bottom-[120%] left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-neutral-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap group-focus-within:opacity-100"
      >
        It is under build
      </div>

      {/* Button */}
      <button
        onClick={handleMobileClick}
        className="flex items-center gap-2 text-[1.4em] py-[0.2em] px-[0.7em] rounded-[0.6em] bg-neutral-900 text-white cursor-not-allowed opacity-60 transition-all duration-150 active:scale-95"
        disabled
      >
        My Chatbot
        <HiSparkles className="h-6 w-6" />
      </button>

      {/* Tooltip for mobile */}
      {showTooltip && (
        <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-neutral-800 text-white text-sm z-10 whitespace-nowrap">
          It is under build
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [darkMode, setDarkMode] = useState(false);

  const isDarkMode = () =>
    typeof window !== 'undefined' &&
    document.documentElement.classList.contains('dark');

  useEffect(() => {
    setDarkMode(isDarkMode());

    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    if (vantaRef.current) {
      vantaEffect.current = CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        ...(isDarkMode()
          ? {
              backgroundColor: 0x101624,
              skyColor: 0x1a2236,
              cloudColor: 0x2d3a55,
              cloudShadowColor: 0x0a0f1a,
              sunColor: 0xfaf9ef,
              sunGlareColor: 0xcad7e6,
              sunlightColor: 0xcad7e6,
              speed: 0.5,
            }
          : {
              backgroundColor: 0xffffff,
              skyColor: 0x68b8d7,
              cloudColor: 0xadc1de,
              cloudShadowColor: 0x183550,
              sunColor: 0xff9919,
              sunGlareColor: 0xff6633,
              sunlightColor: 0xff9933,
              speed: 1,
            }),
      });
    }

    const observer = new MutationObserver(() => {
      setDarkMode(isDarkMode());
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      if (vantaRef.current) {
        vantaEffect.current = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          ...(isDarkMode()
            ? {
                backgroundColor: 0x101624,
                skyColor: 0x1a2236,
                cloudColor: 0x2d3a55,
                cloudShadowColor: 0x0a0f1a,
                sunColor: 0xfaf9ef,
                sunGlareColor: 0xcad7e6,
                sunlightColor: 0xcad7e6,
                speed: 0.5,
              }
            : {
                backgroundColor: 0xffffff,
                skyColor: 0x68b8d7,
                cloudColor: 0xadc1de,
                cloudShadowColor: 0x183550,
                sunColor: 0xff9919,
                sunGlareColor: 0xff6633,
                sunlightColor: 0xff9933,
                speed: 1,
              }),
        });
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center transition-colors duration-300 overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: 0, marginTop: 0 }}
    >
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, top: 0, height: '100vh' }}
      />

      <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center relative z-10">
        <div
          className="w-full max-w-3xl mx-auto rounded-xl p-8 shadow-2xl"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 animate-fadeIn ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Brahmagnani Sreeram
          </h1>
          <div className="h-12 mb-8">
            <TypeAnimation
              sequence={[
                'Data Engineer & Full Stack Developer',
                2000,
                'AI | LLM | Automation Builder',
                2000,
                'DevOps & Cloud Enthusiast',
                2000,
                'Tech Generalist & Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-3xl font-medium text-gray-900 dark:text-white"
            />
          </div>

          {/* Chatbot Button */}
          <ChatbotButton />

          <div className="flex gap-4 mt-8 justify-center">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 bg-transparent border border-blue-600 hover:bg-blue-600/10 font-medium rounded-md transition-colors duration-300 ${
                darkMode ? 'text-blue-200' : 'text-blue-700'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
