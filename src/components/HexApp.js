import React from "react";
import { useDimensions } from "./UseDimensions";
import { Canvas } from "./HexCanvas";
import styled from "@emotion/styled";
import { Hexagon } from "./Hexagon";
import { getHexagonsToFillZone } from "./RandomHelpers";
// import "./styles.css";

const HexApp = () => {
  const [ref, { width, height, dpr }] = useDimensions();

  return (
    <Main ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <Canvas width={width} height={height} dpr={dpr} isAnimating={true}>
          {getHexagonsToFillZone({
            height: height * dpr,
            width: width * dpr,
          }).map((hexagon, index) => (
            <Hexagon key={index} {...hexagon} />
          ))}
        </Canvas>
      )}
    </Main>
  );
};

export default HexApp;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
`;
