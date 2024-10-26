// src/components/VideoPlayer.js
import React, { useRef } from "react";
import myVideo from './images/video2.mp4';
import './VideoPlayer.css'; // נניח שמקשר לקובץ CSS

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <section className="video-section">
      <div className="video-ellipse">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onClick={handleVideoClick}
          style={{ cursor: "pointer" }} // להדגיש שזה ניתן ללחיצה
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
