import React from 'react';
import SongCard from './SongCard';

const SongCarousel = () => {
  const songs = [
    {
      title: "In the clouds",
      artist: "IO",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
      playCount: "374K",
      likeCount: "5.1K",
      artistAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face"
    },
    {
      title: "Coffee Love (Remastered)",
      artist: "sonoa",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      playCount: "299K",
      likeCount: "6.8K",
      artistAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=50&h=50&fit=crop&crop=face"
    },
    {
      title: "Sofia Kroun - Welcome to Nowhere",
      artist: "XAVI",
      imageUrl: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&h=400&fit=crop",
      playCount: "303K",
      likeCount: "5.8K",
      artistAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      title: "Feeling of Love",
      artist: "Lucid Dreamer Records",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      playCount: "345K",
      likeCount: "4.5K",
      artistAvatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=50&h=50&fit=crop&crop=face"
    },
    {
      title: "Just Imagine",
      artist: "brody",
      imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop",
      playCount: "460K",
      likeCount: "7.1K",
      artistAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    }
  ];

  return (
    <div className="w-full overflow-hidden" style={{ height: '380px' }}>
      <div className="flex animate-scroll" style={{ marginLeft: '38.25px', marginRight: '38.25px' }}>
        {songs.map((song, index) => (
          <div 
            key={index}
            className="min-w-0" 
            style={{ flex: '0 0 228.22px', marginRight: '38.25px' }}
          >
            <div 
              className="rounded-[20px] flex items-center justify-center text-white text-2xl" 
              style={{ width: '228.22px', height: '380px' }}
            >
              <SongCard {...song} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;