'use client';
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'videojs-contrib-ads';
import 'videojs-ima';

import 'video.js/dist/video-js.css';
import '@/app/video-skin.css';

const VideoPlayer = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const { options, onReady, ima } = props;

  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [showSkipBtn, setShowSkipBtn] = useState(false);

  const [showVideo, setShowVideo] = useState(true);

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);

        player.ima(ima);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
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
    // Get the video player's height and set it to the video wrapper
    videoWrapperRef.current.style.height = videoRef.current.clientHeight + 'px';

    const observer = new IntersectionObserver(
      (entries) => {
        // The callback is called whenever the visibility of the target changes
        entries.forEach((entry) => {
          setIsFixed(!entry.isIntersecting);
        });
      },
      {
        // You can customize the root, rootMargin, and threshold options
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.2, // Trigger when 50% of the target is visible
      }
    );

    // Start observing the target element
    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (videoWrapperRef.current) {
        observer.unobserve(videoWrapperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCloseBtn(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkipBtn(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!showVideo) return null;

  return (
    <div ref={videoWrapperRef} className="relative">
      <div className="absolute z-[9999] top-1 right-1 flex gap-1">
        {showSkipBtn && (
          <button
            className="bg-[#00b2ff] text-white text-xs font-medium py-1 px-2"
            onClick={() => {
              setShowSkipBtn((prev) => !prev);
              setShowVideo(false);
            }}
          >
            Skip
          </button>
        )}
        {showCloseBtn && (
          <button
            className="bg-[#00b2ff] text-white text-xs font-medium py-0.5 px-3"
            onClick={() => {
              setShowCloseBtn((prev) => !prev);
              setShowVideo(false);
            }}
          >
            Close
          </button>
        )}
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
