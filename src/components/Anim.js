import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import psychic from "../imgs/psychic.png";

export const Anim = () => {
  // new
  let imgRef = useRef(null);

  const [animation, setAnimation] = useState();

  useEffect(() => {
    setAnimation(
      TweenMax.to(imgRef, 10, {
        rotation: 360,
        repeat: -1
      }).pause()
    );
  }, []);

  return (
    <div className="App">
      <img
        src={psychic}
        className="App-logo"
        alt="logo"
        // new
        ref={element => {
          imgRef = element;
        }}
      />
      <div style={{ marginTop: "150px" }}>
        <button onClick={() => animation.play()}>Play</button>
        <button onClick={() => animation.pause()}>Pause</button>
        <button onClick={() => animation.reverse()}>Reverse</button>
      </div>
    </div>
  );
};

// export default Anim;
