import React from 'react';
import { Play, ThumbsUp } from 'lucide-react';

interface SongCardProps {
  title: string;
  artist: string;
  imageUrl: string;
  playCount: string;
  likeCount: string;
  artistAvatar: string;
}

const SongCard: React.FC<SongCardProps> = ({
  title,
  artist,
  imageUrl,
  playCount,
  likeCount,
  artistAvatar
}) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[176px] md:h-[311px] rounded-[12px] relative transition-transform duration-300 hover:scale-[102%] origin-top overflow-hidden">
        <img 
          alt={title}
          className="w-full h-full object-cover" 
          loading="lazy" 
          src={imageUrl}
        />
        <div className="absolute top-[13px] left-[13px]">
          <Play className="w-[18px] h-[21px] text-white" fill="currentColor" />
        </div>
        <div className="absolute left-[14.5px] bottom-[13px] flex flex-row gap-1">
          <div 
            aria-label="Play button with play count" 
            className="flex-row items-center gap-1 rounded-md px-2 py-1 font-sans bg-clip-padding border border-metallicWhite/7 text-metallicWhite inline-flex w-auto bg-[rgba(14,8,8,0.25)] backdrop-blur-[15.22px] h-[30px] text-[12.68px] font-medium leading-[15.216px] uppercase"
          >
            <div>
              <Play className="w-[12px] h-[12px]" fill="currentColor" />
            </div>
            <div>{playCount}</div>
          </div>
          <button 
            className="flex-row items-center gap-1 rounded-md px-2 py-1 font-sans bg-clip-padding border border-metallicWhite/7 text-metallicWhite w-auto hover:text-vinylBlack-dark hover:bg-gray-800/30 hidden md:flex bg-[rgba(14,8,8,0.25)] backdrop-blur-[15.22px] h-[30px] text-[12.68px] font-medium leading-[15.216px] uppercase" 
            aria-label="Like button with like count"
          >
            <div>
              <ThumbsUp className="w-[14px] h-[14px]" fill="currentColor" />
            </div>
            <div>{likeCount}</div>
          </button>
        </div>
      </div>
      <div className="text-white text-[15.581px] font-medium leading-[15.581px] mt-[15px] whitespace-nowrap text-ellipsis overflow-hidden">
        {title}
      </div>
      <div className="flex gap-[4px] mt-[10px] items-center">
        <div className="flex-[0_0_24px] h-[24px]">
          <img 
            alt={artist}
            className="w-full h-full rounded-full" 
            loading="lazy" 
            src={artistAvatar}
          />
        </div>
        <div className="flex-1 text-[11.685px] font-normal font-medium leading-[15.581px]">{artist}</div>
      </div>
    </div>
  );
};

export default SongCard;