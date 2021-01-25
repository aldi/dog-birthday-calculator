import React from 'react';

export default function BackgroundVideo() {
  return (
    <div className="videobg">
      <div className="videobg-width">
        <div className="videobg-aspect">
          <div className="videobg-make-height">
            <div className="videobg-hide-controls">
              <iframe
                title="video"
                src="https://player.vimeo.com/video/114960135?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&playsinline=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
