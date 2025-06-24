import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QualitySection from '@/components/QualitySection';

const Index = () => {
  return (
    <div className="@container bg-background-primary w-full h-full flex flex-col" data-theme="dark">
      <div className="relative flex flex-1 overflow-y-hidden overflow-x-hidden w-full mt-0 md:mt-0">
        <div className="w-full flex flex-column justify-stretch items-stretch flex-1 w-full overflow-hidden z-10">
          <div className="flex lg:min-w-[570px] flex-1 bg-background-primary w-full max-w-full" id="main-container">
            <div className="w-full h-full bg-[#0E0808]">
              <div className="flex flex-col w-full h-full overflow-scroll scrollbar-hide relative">
                {/* Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <img 
                    className="absolute inset-0 w-full h-full object-fill transition-opacity duration-[1500ms] ease-in-out" 
                    alt="Suno background aura" 
                    loading="lazy" 
                    src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop" 
                    style={{ mixBlendMode: 'screen', opacity: 1 }}
                  />
                  <div 
                    className="absolute inset-0" 
                    style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(14, 8, 8) 100%)' }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <Header />
                  <HeroSection />
                  <QualitySection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;