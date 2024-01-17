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

      <div className="space-y-8 mt-10">
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore ad voluptate a aut consectetur, magnam
          natus maxime quidem deserunt sed assumenda? Quo accusamus unde tempore ad eos sapiente, modi dolores earum
          aliquid quia corrupti commodi soluta ipsum necessitatibus odit, perspiciatis cupiditate quisquam asperiores,
          repellat excepturi deleniti facilis quod beatae! Ullam odit molestiae possimus facere illum, totam distinctio
          dolores. Iure quidem iusto architecto iste quos doloremque mollitia optio ipsum accusamus? Nesciunt libero
          quia, unde iusto hic doloremque blanditiis incidunt? Quidem, maiores esse. Ipsum velit odio ducimus natus et
          impedit mollitia neque cupiditate, rem, rerum repudiandae molestias nesciunt aspernatur reprehenderit delectus
          nisi beatae. Voluptate deleniti aut culpa sit saepe id placeat. Labore temporibus sint nulla eius et harum
          veniam quo aliquam animi earum! Voluptatibus in ratione necessitatibus? Tempora nemo temporibus aliquam
          numquam molestiae nam vero necessitatibus aspernatur omnis facilis expedita laborum qui itaque ipsam magnam
          maxime atque, maiores enim fugiat, nulla architecto in quod! Debitis rerum quasi veniam commodi dolor soluta
          cum quaerat porro asperiores eum, obcaecati eos voluptate sit similique molestiae repellat quis doloremque.
          Tenetur tempora quos cumque ab recusandae facilis molestiae. Officia expedita itaque soluta atque hic animi
          quas eius, ipsam quam, at exercitationem cumque ea possimus. Quae, in.
        </p>

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore ad voluptate a aut consectetur, magnam
          natus maxime quidem deserunt sed assumenda? Quo accusamus unde tempore ad eos sapiente, modi dolores earum
          aliquid quia corrupti commodi soluta ipsum necessitatibus odit, perspiciatis cupiditate quisquam asperiores,
          repellat excepturi deleniti facilis quod beatae! Ullam odit molestiae possimus facere illum, totam distinctio
          dolores. Iure quidem iusto architecto iste quos doloremque mollitia optio ipsum accusamus? Nesciunt libero
          quia, unde iusto hic doloremque blanditiis incidunt? Quidem, maiores esse. Ipsum velit odio ducimus natus et
          impedit mollitia neque cupiditate, rem, rerum repudiandae molestias nesciunt aspernatur reprehenderit delectus
          nisi beatae. Voluptate deleniti aut culpa sit saepe id placeat. Labore temporibus sint nulla eius et harum
          veniam quo aliquam animi earum! Voluptatibus in ratione necessitatibus? Tempora nemo temporibus aliquam
          numquam molestiae nam vero necessitatibus aspernatur omnis facilis expedita laborum qui itaque ipsam magnam
          maxime atque, maiores enim fugiat, nulla architecto in quod! Debitis rerum quasi veniam commodi dolor soluta
          cum quaerat porro asperiores eum, obcaecati eos voluptate sit similique molestiae repellat quis doloremque.
          Tenetur tempora quos cumque ab recusandae facilis molestiae. Officia expedita itaque soluta atque hic animi
          quas eius, ipsam quam, at exercitationem cumque ea possimus. Quae, in.
        </p>

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore ad voluptate a aut consectetur, magnam
          natus maxime quidem deserunt sed assumenda? Quo accusamus unde tempore ad eos sapiente, modi dolores earum
          aliquid quia corrupti commodi soluta ipsum necessitatibus odit, perspiciatis cupiditate quisquam asperiores,
          repellat excepturi deleniti facilis quod beatae! Ullam odit molestiae possimus facere illum, totam distinctio
          dolores. Iure quidem iusto architecto iste quos doloremque mollitia optio ipsum accusamus? Nesciunt libero
          quia, unde iusto hic doloremque blanditiis incidunt? Quidem, maiores esse. Ipsum velit odio ducimus natus et
          impedit mollitia neque cupiditate, rem, rerum repudiandae molestias nesciunt aspernatur reprehenderit delectus
          nisi beatae. Voluptate deleniti aut culpa sit saepe id placeat. Labore temporibus sint nulla eius et harum
          veniam quo aliquam animi earum! Voluptatibus in ratione necessitatibus? Tempora nemo temporibus aliquam
          numquam molestiae nam vero necessitatibus aspernatur omnis facilis expedita laborum qui itaque ipsam magnam
          maxime atque, maiores enim fugiat, nulla architecto in quod! Debitis rerum quasi veniam commodi dolor soluta
          cum quaerat porro asperiores eum, obcaecati eos voluptate sit similique molestiae repellat quis doloremque.
          Tenetur tempora quos cumque ab recusandae facilis molestiae. Officia expedita itaque soluta atque hic animi
          quas eius, ipsam quam, at exercitationem cumque ea possimus. Quae, in.
        </p>
      </div>
    </div>
  );
}
