'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const toggleExpand = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const closeExpanded = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // Lock body scroll + Escape key when expanded
  useEffect(() => {
    if (!isExpanded) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const videoElement = (
    <div
      className={`relative overflow-hidden border-2 border-[#F5F0E8] bg-black ${
        isExpanded
          ? 'max-w-[90vw] max-h-[90vh]'
          : `aspect-video w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl shadow-[4px_4px_0_#F5F0E8] ${className}`
      }`}
    >
      <video
        ref={videoRef}
        className={`${isExpanded ? 'max-w-[90vw] max-h-[90vh]' : 'w-full h-full object-cover'}`}
        poster={poster}
        onEnded={handleVideoEnd}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Expand/Close Button */}
      <button
        onClick={toggleExpand}
        className="absolute top-2 left-2 sm:top-4 sm:left-4 z-30 p-2.5 min-w-[44px] min-h-[44px] bg-[#0a0a0a]/80 border-2 border-[#F5F0E8] text-[#F5F0E8] hover:bg-[#FF2D6B] hover:border-[#FF2D6B] hover:text-[#0a0a0a] transition-colors flex items-center justify-center"
        aria-label={isExpanded ? 'Close fullscreen' : 'Open fullscreen'}
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">
          {isExpanded ? 'close_fullscreen' : 'open_in_full'}
        </span>
      </button>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0a0a0a]/80 flex items-center justify-center border-2 border-[#F5F0E8] hover:bg-[#FF2D6B] hover:border-[#FF2D6B] hover:text-[#0a0a0a] transition-all ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-[#F5F0E8]">
          play_arrow
        </span>
      </button>
    </div>
  );

  if (isExpanded) {
    return (
      <>
        {/* Placeholder to keep layout */}
        <div className={`w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-video ${className}`} />

        {/* Portal: fullscreen overlay */}
        {createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0a0a0a]/95" onClick={closeExpanded} />
            <div className="relative z-10">
              {videoElement}
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }

  return videoElement;
}
