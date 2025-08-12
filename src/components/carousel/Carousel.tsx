"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

// Placeholder data for the carousel slides
const images = [
  {
    label: "Reuniting You with What Matters Digitally",
    description: "Get your product",
    imgPath:
      "https://i.ibb.co.com/k2BcVb7m/u-Yew2vu7-R9ic2h-Lbt-OM97g-removebg-preview.png",
  },
  {
    label: "Smart Search for Lost Things",
    description: "Claim Your Item",
    imgPath:
      "https://i.ibb.co.com/BVGQDmTN/heimplanet-monolith-weekender-2-removebg-preview.png",
  },
  {
    label: "A Place Where Lost Things Find Hope",
    description: "Upload what you found",
    imgPath: "https://i.ibb.co.com/xqQDx0hx/OIP-removebg-preview-1.png",
  },
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  // Fix for the TypeScript error by explicitly typing the ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle auto-play logic with pause on hover
  useEffect(() => {
    // Clear any existing timer to prevent duplicates
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, maxSteps]);

  // Trigger animation state change on activeStep update
  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => setIsAnimating(true), 50); // Small delay to trigger CSS transition
    return () => clearTimeout(timer);
  }, [activeStep]);

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setActiveStep(step);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const wordsToColor = ["Digitally", "Find", "Lost"];

  return (
    <div
      className="relative w-full max-w-full overflow-hidden px-40 bg-[#f8f8fb] font-inter"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[500px] md:h-[600px]">
        {images.map((step, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full  grid grid-cols-6 lg:grid-cols-12 gap-16 items-center justify-between
                        transition-opacity duration-500 ease-in-out ${
                          index === activeStep
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                        }`}
          >
            {/* Text Content with Vertical Animation */}
            <div className="text-center lg:text-left overflow-hidden lg:col-span-6">
              <div
                className={`transition-transform duration-500 ease-out ${
                  isAnimating && index === activeStep
                    ? "translate-y-0"
                    : "translate-y-full"
                }`}
              >
                <p className="text-[#777777] text-[14px] font-medium mb-[20px]">
                  {step.description}
                </p>
                <h2 className="text-[#3d4750] text-[60px] font-bold font-quicksand leading-tight mb-[20px]">
                  {step.label.split(" ").map((word, wordIndex) => (
                    <React.Fragment key={wordIndex}>
                      {wordIndex > 0 && " "}
                      {wordsToColor.includes(word) ? (
                        <span className="text-[#6c7fd8]">{word}</span>
                      ) : (
                        word
                      )}
                    </React.Fragment>
                  ))}
                </h2>
                <button className="px-[20px] py-[8px] text-[14px] border border-[#3d4750] rounded text-[#3d4750] transition-transform transform hover:scale-105">
                  Claim Now
                </button>
              </div>
            </div>
            {/* Image with Horizontal Animation */}
            <div className="overflow-hidden lg:col-span-6">
              <img
                className={`w-full h-[496px] max-h-96 md:max-h-96 object-contain rounded-lg transition-transform duration-500 transform hover:scale-105 ${
                  isAnimating && index === activeStep
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              index === activeStep
                ? "bg-[#6c7fd8]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
