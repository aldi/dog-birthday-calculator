import { memo } from 'react';
import videoWebm from '../assets/background-video.webm';
import videoMp4 from '../assets/background-video.mp4';

const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="videobg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="videobg-video"
      >
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
    </div>
  );
});

export default BackgroundVideo;
