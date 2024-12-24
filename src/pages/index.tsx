
import React from 'react';
import ChristmasCat from '@/components/ChrismasCat'
import BongoCat from '@/components/BongoCat';
import TypingWrapper from '@/components/TypingWrapper';
import Snow from '@/components/Snow';

const TEXT_LIST = ["Hi, Mèo Con", "Tớ muốn dành tặng cậu", "Một bất ngờ"];
// const TEXT_LIST = ["Hi"];

export default function Home() {
  const [showStarted, setShowStarted] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <Snow>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        {!showStarted && <TypingWrapper textList={TEXT_LIST} videoRef={videoRef} setShowStarted={setShowStarted}/>}
      </div>
      <BongoCat showStarted={showStarted} videoRef={videoRef} />
      <ChristmasCat />
    </Snow>
  );
}
