
import React, { useEffect } from 'react';
import ChristmasCat from '@/components/ChrismasCat'
import BongoCat from '@/components/BongoCat';
import Intro, {TypingWrapper} from '@/components/TypingWrapper';
import Snow from '@/components/Snow';

const TEXT_LIST = ["Hi, Mèo Con", "Tớ muốn dành tặng cậu", "Một bất ngờ"];
const LYRICS = [
  ["Moewwwww 🐾"],
  ["Mèo Con 🐱", "Quỳnh Anh 🌸", "Tớ yêu cậu nhiều lắm ❤️"],
  ["Cảm ơn cậu 🙏", "Một năm qua 📅", "Đã ở bên tớ 😊"],
  ["Tớ muốn dành tặng cậu 🎁", "Một bất ngờ 😘"],
  ["Một bài hát 🎵", "Dành riêng cho cậu 💖"],
  ["Mèo Con 🐱", "Quỳnh Anh 🌷", "Tớ yêu cậu nhiều lắm 💕"],
  ["Cảm ơn cậu 🙌", "3 năm qua ⏳", "Đã ở bên tớ 🥰"],
  ["Hãy tiếp tục yêu nhau nhé 🌟"],
  ["Quỳnh Anh 🌺, Anh yêu em 💕"],
];
// const TEXT_LIST = ["Hi"];

export default function Home() {
  const [showStarted, setShowStarted] = React.useState(false);
  const [showScript, setShowScript] = React.useState(false);
  const [showEnded, setShowEnded] = React.useState(false);

  const [textList, setTextList] = React.useState(LYRICS[0]);
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  useEffect(() => {
    if (showStarted && 0 < currentTextIndex && currentTextIndex < LYRICS.length ) {
      setTimeout(() => {
        setTextList(LYRICS[currentTextIndex]);
      }, 500);

      // if (currentTextIndex == 1) {
      //   setTimeout(() => {
      //     setTextList(LYRICS[currentTextIndex]);
      //   }, 500);

      // if (currentTextIndex == 2) {
      //   setTimeout(() => {
      //     setTextList(LYRICS[currentTextIndex]);
      //   }, 500);
      // }
 
    }

  }, [currentTextIndex]);

    useEffect(() => {
      console.log("textList", textList);
    }, [textList]);


  // DONE: implement video end hook
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (showEnded) {
      console.log("Video ended");
    }
  }, [showEnded]);

  useEffect(() => {
    if (showStarted){
      setTimeout(() => {
        setShowScript(true);
      }, 3500);
    }
  }, [showStarted]);

  return (
    <Snow>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
        {!showStarted && <Intro textList={TEXT_LIST} videoRef={videoRef} setShowStarted={setShowStarted} />}
      </div>
      
      {
        showScript && (
          <div className="absolute bottom-10 left-5 z-10"> 
            <TypingWrapper textList={textList} style={{"color":"black"}} setToClick={() =>setCurrentTextIndex(e => e+1)} />
          </div>
        )
      }
      <BongoCat showStarted={showStarted} videoRef={videoRef} setShowEnded={setShowEnded}/>
      <ChristmasCat />
    </Snow>
  );
}
