import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";

export default function Cat() {
  const catRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const cat = catRef.current;
    const tlc = gsap.timeline();

    tlc.fromTo(cat, { opacity: 1, y: 60 }, { opacity: 1, y: 0, ease: Power4.easeIn, duration: 1.5 });

    if (cat) {
      cat.onmouseover = () => {
        tlc.reverse();
      };
      cat.onmouseout = () => {
        gsap.delayedCall(0.7, () => tlc.play());
      };
    }
  }, []);

  return (
    <g>
      <g>
        <defs>
          <path
            id="SVGID_1_"
            d="M215,240.3c5.4,0.7,11.3,2.3,14,7c3.1-4.1,8-6.5,13.1-7.3c5.1-0.8,10.3,0,15.2,1.3
          c-0.4,3.5,0.7-44.3,0.7-44.3l-59-2c0,0-2.1,51.2,0.5,47.4C202.6,237.7,210.4,239.6,215,240.3z"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#SVGID_2_)">
          <g className="cat" ref={catRef}>
            {/* Cat Body */}
            <path
              fill="#39445B"
              d="M213.6,237.8c-0.3,4.5,0.5,9.9,1,13.1c0.2,1.3,0.5,2.7,1.6,3.5c0.7,0.5,1.5,0.6,2.3,0.8
          c7.6,1.1,15.4,0.7,22.8-1.3c0.5-0.1,1-0.3,1.4-0.6c0.6-0.5,0.7-1.4,0.8-2.2c0.2-2.1,0.4-4.2,0.6-6.4c0.2-2.1,0.4-4.2,0.2-6.2
          C234.9,242.8,222.9,242.2,213.6,237.8z"
            />
            <path
              fill="#171E2B"
              d="M240.2,230.2c-1.6-1.1-3.6-1.5-5.5-1.8c-5-0.6-16.2-1.2-19.5,3.8
          c-0.9,1.4-1.4,3.4-1.6,5.6c9.3,4.5,21.3,5,30.7,0.8c0-0.6-0.1-1.1-0.2-1.7C243.6,234.2,242.4,231.7,240.2,230.2z"
            />
            {/* Cat Scarf */}
            <g>
              <path
                fill="#DD4E85"
                d="M212.3,241.4c-0.7,3.2-1.2,6.6-2.9,9.4c-0.1,0.2-0.2,0.3-0.2,0.5c0,0.2,0.2,0.3,0.4,0.4
              c1.5,0.9,3.2,1.4,5,1.5c0.4,0,0.9,0,1.2-0.3c0.3-0.2,0.4-0.6,0.5-0.9c1.2-3.7,2-7.6,2.8-11.5c-2.2-0.8-4.2-2-5.9-3.5
              C212.8,238.8,212.5,240.4,212.3,241.4z"
              />
              <path
                fill="#D10F50"
                d="M220.1,232.5c-0.8-0.9-3.1-0.8-4-0.2c-1.4,0.8-2.3,2.9-2.9,4.9
              c1.7,1.5,3.7,2.7,5.9,3.5c0.1-0.6,0.2-1.2,0.4-1.9C219.8,237.3,221.2,233.6,220.1,232.5z"
              />
              <path
                fill="#DD4E85"
                d="M240.1,235.5c0.7-0.2,1.4-0.5,2-1c1.2-1,1.3-2.7,1.4-4.2c0-0.8,0-1.7-0.6-2.3
              c-0.7-0.7-1.8-0.4-2.8-0.2c-4.1,1.1-8.3,1.5-12.5,1.3c-2.1-0.1-4.2-0.3-6.2-0.7c-1.6-0.3-3.9-1.4-5.6-0.7
              c-1.1,0.5-1.3,1.5-1.5,2.6c-0.3,1.8-0.8,3.6,1.1,4.4c3.6,1.5,7.7,2.2,11.6,2.3C231.5,237.3,235.9,236.7,240.1,235.5z"
              />
            </g>
            {/* Cat Lines and Face */}
            <g>
              {/* Cat Line Left Up */}
              <rect x="208" y="221.3" fill="#171E2B" width="4.2" height="2" />
              {/* Cat Line Left Down */}
              <rect x="208" y="224.3" fill="#171E2B" width="5.9" height="2" />
              {/* Cat Line Right Up */}
              <rect x="243.4" y="221.3" fill="#171E2B" width="4.2" height="2" />
              {/* Cat Line Right Down */}
              <rect x="241.7" y="224.3" fill="#171E2B" width="5.9" height="2" />
              {/* Cat Face */}
              <path
                fill="#39445B"
                d="M239.5,210.9c0,0-5.7-2.9-11.3-2.9c-5.7,0-11.4,2.9-11.4,2.9l-5.6,0c0,0,0,8.8,0,11.3
                  c0,7.8,9.2,11.3,17,11.3c7.8,0,17-3.5,17-11.3c0-3.1,0-11.3,0-11.3L239.5,210.9z"
              />
              {/* Cat Eye Left */}
              <circle fill="#FFDF9F" cx="219.3" cy="222.5" r="4.5" />
              {/* Cat Eye Right */}
              <circle fill="#FFDF9F" cx="237" cy="222.5" r="4.5" />
              {/* Cat Eye Left Pupil */}
              <circle fill="#171E2B" cx="219.3" cy="222.5" r="2.8" />
              {/* Cat Eye Right Pupil */}
              <circle fill="#171E2B" cx="237" cy="222.5" r="2.8" />
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}