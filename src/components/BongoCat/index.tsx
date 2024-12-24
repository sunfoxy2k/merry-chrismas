import React, {useEffect, useRef} from 'react';

export default function BongoCat({children, videoRef} : {children: React.ReactNode, showStarted: boolean}) {


  return (
    // <div className="relative h-screen w-full overflow-auto" onClick={onClick}>
      <video
      ref={videoRef}
        className="w-full h-full object-cover"
        src="/video.mp4"
        // autoPlay
        loop
        // muted
        playsInline
        // controls
      />
      // {children}
    // </div>
  );
}