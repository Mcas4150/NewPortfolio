import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, Column } from "./Shared";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { Line, Util, Rectangle } from "pts/dist/es5";
import { fabric } from "fabric";
import Ears from "./Ears";

// import Viz from "./viz";

import { QuickStartCanvas } from "react-pts-canvas";

const startState = { autoAlpha: 0, y: 0, x: 0 };

export default class Contact extends Component {
  drawEars() {
    var total = 1000,
      blobs = new Array(total),
      myfps = 60,
      updateTime = 1000 / myfps,
      mouse_pos = { x: 0, y: 0 },
      canvas = (this.__canvas = new fabric.Canvas("c", {
        renderOnAddRemove: false,
        selection: false
      })),
      maxx = canvas.width,
      maxy = canvas.height,
      msg,
      startTime,
      prevTime,
      ms,
      frames;

    canvas.setBackgroundImage("../assets/bkg.jpg");
    fabric.Image.fromURL("../assets/blob.png", blobLoaded);

    canvas.on("mouse:move", function(options) {
      mouse_pos = canvas.getPointer(options.e);
    });

    function blobLoaded(img) {
      for (var i = 0; i < total; i++) {
        var img2 = new fabric.Image(img.getElement(), {
          left: Math.random() * maxx,
          top: Math.random() * maxy,
          selectable: false
        });
        img2.vx = 0;
        img2.vy = 0;
        canvas.add(img2);
        blobs[i] = img2;
      }

      msg = new fabric.Text("FPS: 0/" + myfps, {
        fontFamily: "Arial",
        fontSize: 12,
        fill: "white",
        fontWeight: "bold",
        left: 50,
        top: 35,
        selectable: false
      });
      canvas.add(msg);

      frames = 0;
      startTime = Date.now();
      prevTime = startTime;
      animate();
    }

    function animate() {
      for (var i = 0; i < total; i++) {
        var blob = blobs[i];
        var dx = blob.left - mouse_pos.x;
        var dy = blob.top - mouse_pos.y;
        var vx = blob.vx;
        var vy = blob.vy;

        if (dx * dx + dy * dy <= 10000) {
          vx += dx * 0.01;
          vy += dy * 0.01;
        }
        vx *= 0.95;
        vy *= 0.95;

        vx += Math.random() - 0.5;
        vy += Math.random() - 0.5;

        var x = (blob.left += vx);
        var y = (blob.top += vy);

        if (x < 0 || x > maxx || y < 0 || y > maxy) {
          var r = Math.atan2(y - maxy / 2, x - maxx / 2);
          vx = -Math.cos(r);
          vy = -Math.sin(r);
        }

        blob.vx = vx;
        blob.vy = vy;
      }

      var time = Date.now();
      frames++;

      if (time > prevTime + 1000) {
        let fps = Math.round((frames * 1000) / (time - prevTime));
        prevTime = time;
        frames = 0;

        msg.set("text", "FPS: " + fps + "/" + myfps);
      }

      fabric.util.requestAnimFrame(animate, canvas.getElement());
      canvas.renderAll();
    }
  }

  componentDidMount() {
    this.drawEars();
  }
  // <Transition
  //   unmountOnExit
  //   in={props.show}
  //   timeout={500}
  //   onEnter={node => TweenMax.set(node, startState)}
  //   onExit={node => TweenMax.set(node, startState)}
  //   addEndListener={(node, done) => {
  //     TweenMax.to(node, 0.5, {
  //       autoAlpha: props.show ? 1 : 0,
  //       opacity: props.show ? 1 : 0,

  //       onComplete: done
  //     });
  //   }}
  // >

  render() {
    return (
      // {this.props.show ? (
      <Section id="contact">
        <Column>
          {/* <RecordImage src={nimbus} />
            <RecordImage src={psychic} />
            <RecordImage src={joyexpo} />
           <Animate timing="0.3">Education happens everywhere</Animate> */}
        </Column>
        <br />
        <Text>I'm all Ears</Text>
        {/* <QuickStartCanvas
          style={{ height: "50vh", width: "50vw" }}
          onAnimate={(space, form, time) => {
            let subs = space.innerBound.map(p =>
              Line.subpoints([p, space.pointer], 30)
            );
            let rects = Util.zip(subs).map((r, i) =>
              Rectangle.corners(r).rotate2D(i / 60, space.pointer)
            );
            form.strokeOnly("#FDC", 2).polygons(rects);
          }}
        /> */}
        {/* <canvas id="c" /> */}
        <Email>Email</Email>
        <Email>Github</Email>
        <Email>LinkedIn</Email>
      </Section>
      // ) : ( ) }
      // </Transition>
    );
  }
}

const Text = styled.div`
  font-size: 4vw;
  font-family: "MonumentRegular";
  margin: 2vw;
`;

const Email = styled.a`
  margin: 2vw;
  // font-size: 7rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 3vw;
  font-family: "MonumentRegular";
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
`;
