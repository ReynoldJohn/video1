'use client';
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';


import 'video.js/dist/video-js.css';
import '@/app/video-skin.css';

const VideoPlayer = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const { options, onReady } = props;

  

  const [showVideo, setShowVideo] = useState(true);

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);

      }));

     
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  useEffect(() => {
    videoWrapperRef.current.style.height = videoRef.current.clientHeight + 'px';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFixed(!entry.isIntersecting);
        });
      },
      {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.2,
      }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => {
      if (videoWrapperRef.current) {
        observer.unobserve(videoWrapperRef.current);
      }
    };
  }, []);

  

  if (!showVideo) return null;

  return (
    <div ref={videoWrapperRef} className="relative">
      <div className="absolute z-[9999] top-1 right-1 flex gap-1">
      
      </div>

      <div className={isFixed ? 'fixed bottom-4 right-4 h-56 aspect-video' : ''}>
        <div data-vjs-player>
          <div ref={videoRef} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
