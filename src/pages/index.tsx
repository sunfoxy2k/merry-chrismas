
import React, { useEffect } from 'react';
import ChristmasCat from '@/components/ChrismasCat'
import BongoCat from '@/components/BongoCat';
import Intro, {TypingWrapper} from '@/components/TypingWrapper';
import Snow from '@/components/Snow';

const TEXT_LIST = ["Hi, Mèo Con", "Tớ muốn dành tặng cậu", "Một bất ngờ"];
const TEXT_LIST_2 = ["Moewwww", "Mèo Con", "Mèo Con"];
// const TEXT_LIST = ["Hi"];

export default function Home() {
  const [showStarted, setShowStarted] = React.useState(false);
  const [showScript, setShowScript] = React.useState(false);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showStarted){
      setTimeout(() => {
        setShowScript(true);
      }, 3000);
    }
  }, [showStarted]);

  return (
    <Snow>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        {!showStarted && <Intro textList={TEXT_LIST} videoRef={videoRef} setShowStarted={setShowStarted}/>}
      </div>
      
      {
        showScript && (
          <div className="absolute bottom-10 left-0 "> 
            <TypingWrapper textList={TEXT_LIST_2} style={{"color":"black"}} setToClick={() => {}} />
          </div>
        )
      }
      <BongoCat showStarted={showStarted} videoRef={videoRef} />
      <ChristmasCat />
    </Snow>
  );
}
