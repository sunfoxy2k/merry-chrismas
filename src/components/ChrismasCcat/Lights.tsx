import { useEffect } from "react";
import { gsap } from "gsap";

export default function Lights() {
  useEffect(() => {
    const shadowBack = document.getElementsByClassName("shadow-2");
    const shadowMed = document.getElementsByClassName("shadow-1");

    const tl = gsap.timeline();

    tl.fromTo(shadowBack, { opacity: 0 }, { opacity: 0.5, repeat: -1, yoyo: true, delay: 0.5 })
      .fromTo(shadowMed, { opacity: 0.25 }, { opacity: 0.5, repeat: -1, yoyo: true });
  }, []);

  return (
    <g>
      {/* Light 1 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="146" cy="256" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="146" cy="256" r="10" />
      <circle fill="#FFDF9F" cx="146" cy="256" r="5" />
      {/* Light 2 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="196" cy="286" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="196" cy="286" r="10" />
      <circle fill="#FFDF9F" cx="196" cy="286" r="5" />
      {/* Light 3 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="370" cy="256" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="370" cy="256" r="10" />
      <circle fill="#FFDF9F" cx="370" cy="256" r="5" />
      {/* Light 4 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="320" cy="286" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="320" cy="286" r="10" />
      <circle fill="#FFDF9F" cx="320" cy="286" r="5" />
      {/* Light 5 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="260" cy="296" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="260" cy="296" r="10" />
      <circle fill="#FFDF9F" cx="260" cy="296" r="5" />
      {/* Light 6 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="196" cy="216" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="196" cy="216" r="10" />
      <circle fill="#FFDF9F" cx="196" cy="216" r="5" />
      {/* Light 7 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="320" cy="216" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="320" cy="216" r="10" />
      <ellipse fill="#FFDF9F" cx="320" cy="216" rx="5.5" ry="5" />
      {/* Light 8 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="260" cy="226" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="260" cy="226" r="10" />
      <circle fill="#FFDF9F" cx="260" cy="226" r="5" />
      {/* Light 9 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="196" cy="156" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="196" cy="156" r="10" />
      <circle fill="#FFDF9F" cx="196" cy="156" r="5" />
      {/* Light 10 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="320" cy="156" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="320" cy="156" r="10" />
      <circle fill="#FFDF9F" cx="320" cy="156" r="5" />
      {/* Light 11 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="260" cy="166" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="260" cy="166" r="10" />
      <circle fill="#FFDF9F" cx="260" cy="166" r="5" />
      {/* Light 12 */}
      <circle className="shadow-2" opacity="0.5" fill="#FFDF9F" cx="260" cy="106" r="15" />
      <circle className="shadow-1" opacity="0.5" fill="#FFDF9F" cx="260" cy="106" r="10" />
      <circle fill="#FFDF9F" cx="260" cy="106" r="5" />
      {/* Star */}
      <path
        className="shadow-2"
        opacity="0.2"
        fill="#FFDF9F"
        d="M292.5,71.5l1.4-1.4c5.9-5.9,7.7-14.8,4.5-22.5l0,0
    c-3.2-7.7-10.6-12.7-18.9-12.8l-0.3-0.8c-3.2-7.9-10.7-13-19.2-13c-8.5,0-16,5.1-19.2,13l-0.3,0.8c-8.3,0.1-15.7,5.1-18.9,12.8
    c-3.2,7.8-1.4,16.6,4.5,22.5l1.4,1.4l-0.5,1.1c-3.3,8.3-1,17.7,5.8,23.4c3.8,3.3,8.6,4.9,13.4,4.9c3.7,0,7.3-1,10.6-3l3.1-1.9
    l3.1,1.9c3.2,1.9,6.9,2.9,10.6,2.9c4.9,0,9.7-1.8,13.4-4.9c6.8-5.8,9.1-15.2,5.8-23.4L292.5,71.5z"
      />
      <path
        className="shadow-1"
        opacity="0.2"
        fill="#FFDF9F"
        d="M283.6,68.6l1-1c4.3-4.3,5.6-10.7,3.3-16.3l0,0c-2.3-5.6-7.7-9.2-13.7-9.3
    l-0.2-0.6c-2.3-5.7-7.8-9.4-13.9-9.4c-6.2,0-11.6,3.7-13.9,9.4l-0.2,0.6c-6,0.1-11.4,3.7-13.7,9.3c-2.3,5.6-1.1,12,3.3,16.3l1,1
    l-0.3,0.8c-2.4,6-0.7,12.8,4.2,17c2.8,2.4,6.2,3.6,9.7,3.6c2.7,0,5.3-0.7,7.7-2.1l2.3-1.4l2.3,1.4c2.3,1.4,5,2.1,7.7,2.1
    c3.6,0,7-1.3,9.7-3.6c4.9-4.2,6.6-11,4.2-17L283.6,68.6z"
      />
      <path
        fill="#FFDF9F"
        d="M278.6,55.1c-0.8-1.9-2.6-3.1-4.6-3.1h-6.6l-2.7-6.9c-0.8-1.9-2.6-3.1-4.6-3.1s-3.9,1.2-4.6,3.1
    l-2.7,6.9H246c-2,0-3.8,1.2-4.6,3.1c-0.8,1.9-0.3,4,1.1,5.4l5.7,5.7l-2.8,6.9c-0.8,2-0.2,4.3,1.4,5.7c1.6,1.4,4,1.6,5.8,0.5
    l7.4-4.5l7.4,4.5c0.8,0.5,1.7,0.7,2.6,0.7c1.2,0,2.3-0.4,3.2-1.2c1.6-1.4,2.2-3.7,1.4-5.7l-2.8-6.9l5.7-5.7
    C279,59.1,279.4,57,278.6,55.1z"
      />
    </g>
  );
}
