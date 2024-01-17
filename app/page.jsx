'use client';
import { useRef } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const ima = {
  adTagUrl:
    'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
    'iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&' +
    'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
    'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js' +
    '&cmsid=496&vid=short_onecue&correlator=',
};

const videoJsOptions = {
  autoplay: true,
  muted: true,
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

    player.on('adsready', function () {
      var events = [
        google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
        google.ima.AdEvent.Type.CLICK,
        google.ima.AdEvent.Type.COMPLETE,
        google.ima.AdEvent.Type.FIRST_QUARTILE,
        google.ima.AdEvent.Type.LOADED,
        google.ima.AdEvent.Type.MIDPOINT,
        google.ima.AdEvent.Type.PAUSED,
        google.ima.AdEvent.Type.RESUMED,
        google.ima.AdEvent.Type.STARTED,
        google.ima.AdEvent.Type.THIRD_QUARTILE,
      ];

      for (var index = 0; index < events.length; index++) {
        player.ima.addEventListener(events[index], onAdEvent.bind(this));
      }
    });

    function onAdEvent(event) {
      console.log(event);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-6 py-20">
      <h1 className="text-5xl font-semibold text-center text-neutral-800">Video.js IMA Example</h1>

      <div className="mt-10">
        <VideoPlayer options={videoJsOptions} ima={ima} onReady={handlePlayerReady} />
      </div>

      
      </div>
    
  );
}
