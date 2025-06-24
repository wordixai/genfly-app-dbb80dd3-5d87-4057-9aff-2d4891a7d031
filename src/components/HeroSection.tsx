import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Play } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Create a beach house song about quitti";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor]);

  return (
    <div className="min-h-[100vh] flex relative flex-col items-center justify-center animate-fadeIn">
      <section className="w-full">
        <div className="flex justify-center items-center text-center mb-8"></div>
        <div>
          <h1 className="font-serif text-center font-light text-foreground-primary px-[20px] md:px-0 text-[45px] leading-[1.2] md:text-[75px] md:leading-[75px] mx-auto transition-all duration-300 max-w-[854px] h-[150px]">
            {typedText}
            <span 
              className={`inline-block w-[2px] h-[70px] bg-foreground-primary ml-[10px] align-middle transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            ></span>
          </h1>
        </div>
        <div>
          <h2 className="text-white mx-auto mt-[28px] max-w-[310px] md:max-w-[410px] px-0 md:px-[20px] text-[18px] font-normal leading-normal text-center">
            Start with a simple prompt or dive into our pro editing tools, your next track is just a step away.
          </h2>
        </div>
      </section>

      <section className="w-full max-w-[557px] mt-[48px] mx-auto px-[20px]">
        <div className="flex flex-col">
          <div className="bg-white/10 w-full rounded-[17px] border-[0.377px] border-white/10 flex md:flex-row flex-col md:p-[3.77px] md:pt-[3.77px] p-[10px] pt-[20px] pl-[10px] md:pl-0 backdrop-blur-[18.827px] relative">
            <div className="flex-1 flex flex-row relative">
              <div className="absolute cursor-pointer left-[8px] md:left-[16px] top-1/2 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-white/20" />
              </div>
              <input 
                className="bg-transparent outline-none shadow-none flex flex-1 text-base md:text-lg truncate font-sans pl-[47px] pr-[10px] text-white placeholder-white/60" 
                placeholder="Type any idea you have" 
                type="text" 
              />
            </div>
            <div className="flex justify-end md:block">
              <Button className="font-sans text-white text-[16px] font-medium p-4 rounded-[15px] transition duration-300 ease-in-out shadow-lg buttonAnimate hover:opacity-90 rounded-[14px] mt-7 md:mt-0 w-[103px] md:w-auto md:mr-0 items-center justify-center">
                <div className="flex items-center justify-center h-full w-full">
                  <span className="mr-0 md:mr-2">
                    <Play className="w-6 h-5" />
                  </span>
                  <span className="block">Create</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[557px] mt-[48px] text-center mx-auto px-[20px]">
        <Button
          variant="outline"
          className="px-4 py-2 text-[15px] leading-[24px] rounded-full text-foreground-primary bg-transparent border-border-primary hover:bg-overlay-onPrimary"
        >
          I'm a musician
        </Button>
      </div>

      <div className="absolute bottom-[75px] md:bottom-[50px] flex justify-center w-full animate-bounce mt-8 cursor-pointer opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <g>
            <path d="m12 12.604 3.9-3.9a.99.99 0 1 1 1.4 1.4l-4.593 4.593a1 1 0 0 1-1.414 0L6.7 10.104a.99.99 0 0 1 1.4-1.4z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;