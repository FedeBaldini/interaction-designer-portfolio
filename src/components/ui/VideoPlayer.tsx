'use client';

import { useState, useRef, useCallback } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleBackdropClick = useCallback(() => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9000] transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      {/* Video Wrapper */}
      <div
        ref={wrapperRef}
        className={`relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black transition-all duration-500 group ${isExpanded ? 'video-expanded' : 'cursor-zoom-in'} ${className}`}
        onClick={toggleExpand}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          onEnded={handleVideoEnd}
          onClick={togglePlay}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Expand Button (Top Left) */}
        <button
          onClick={toggleExpand}
          className="absolute top-4 left-4 z-30 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-black transition-colors"
          aria-label={isExpanded ? 'Close fullscreen' : 'Open fullscreen'}
        >
          <span className="material-symbols-outlined text-2xl">
            {isExpanded ? 'close_fullscreen' : 'open_in_full'}
          </span>
        </button>

        {/* Play Button (Center) */}
        <button
          onClick={togglePlay}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-cyan-500 hover:border-cyan-400 transition-all ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <span className="material-symbols-outlined text-4xl text-white ml-1">
            play_arrow
          </span>
        </button>
      </div>
    </>
  );
}
