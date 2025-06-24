import React from 'react';
import SongCarousel from './SongCarousel';

const QualitySection = () => {
  return (
    <section className="">
      <div className="mt-0 md:mt-[50px] max-w-[800px] mx-auto px-[10px]">
        <div className="text-center">
          <div></div>
          <h1 className="font-serif font-light text-foreground-primary select-none whitespace-pre-wrap text-[35px] leading-[35px] lg:text-[50px] lg:leading-[50px]">
            Mind blowing song quality
          </h1>
          <h2 className="text-foreground-primary text-center text-[16px] mt-[30px] max-w-[615px] mx-auto text-center text-[18px]">
            Whether you have a melody in your head, lyrics you've written, or just a feeling you want to hear—Suno makes high-quality music creation accessible to all
          </h2>
        </div>
      </div>
      <div className="mt-[40px] md:mt-[60px] mb-0 md:mb-[150px] w-full mx-auto max-w-[2508px]">
        <div className="w-full">
          <SongCarousel />
        </div>
      </div>
    </section>
  );
};

export default QualitySection;