'use client';
import { useRef } from 'react';
import VideoPlayer from '../components/VideoPlayer';


const videoJsOptions = {
  autoplay: true,
  muted: false,
  controls: true,
  responsive: true,
  fluid: true,
  controlBar: {
    pictureInPictureToggle: false,
  },
  sources: [
    {
      src: '/test.mp4',
      type: 'video/mp4',
    },
  ],
};

export default function Home() {
  const playerRef = useRef(null);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    

    function onAdEvent(event) {
      console.log(event);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-6 py-20">
      <h1 className="text-5xl font-semibold text-center text-neutral-800">Video.js IMA Example</h1>

      <div className="mt-10">
        <VideoPlayer options={videoJsOptions}  onReady={handlePlayerReady} />
      </div>

      
      </div>
    
  );
}
