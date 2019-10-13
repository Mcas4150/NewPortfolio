import React, { Component } from "react";
import { Line, Util, Rectangle, Pts, space, form } from "pts/dist/es5";

export default class Viz extends Component {
  componentWillMount() {
    var run = Pts.quickStart("pt", "#f03");

    // Pass an animate callback function to run
    run((time, ftime) => {
      let subs = space.innerBound.map(p =>
        Line.subpoints([p, space.pointer], 30)
      );
      let rects = Util.zip(subs).map((r, i) =>
        Rectangle.corners(r).rotate2D((i * Math.PI) / 60, space.pointer)
      );
      form.strokeOnly("#FDC", 2).polygons(rects);
    });

    // let run = Pts.quickStart("#pt", "#e2e6ef");

    // run((time, ftime) => {
    //   // rectangle
    //   var rect = Rectangle.fromCenter(space.center, space.size.$divide(2));
    //   var poly = Rectangle.corners(rect);
    //   poly.shear2D(Num.cycle((time % 5000) / 5000) - 0.5, space.center);

    //   // triangle
    //   var tris = poly.segments(2, 1, true);
    //   tris.map(t => t.push(space.pointer));

    //   // drawing
    //   form.fillOnly("#123").polygon(poly);
    //   form.strokeOnly("#fff ", 3).polygons(tris);
    //   form.fill("#123").point(space.pointer, 5);
    // });

    // //// ----

    // space
    //   .bindMouse()
    //   .bindTouch()
    //   .play();

    // Pts.quickStart( "pts", "#62e" );
    // let index = new Pt(-1,-1);
    // let synth = new Tone.Synth();
    // let sound = Sound.from( synth, synth.context ).analyze(128);
    // synth.toMaster(); // play using tone.js instead of Pts
    // space.add({
    //   animate: (time) => {
    //     if (synth.context.state === 'suspended') { // mostly for safari
    //       form.fillOnly("#fff").text( [20, 30], "Click anywhere to start" );
    //     }
    //     let area = space.size.$divide( 3 );
    //     let idx = space.pointer.$divide( area ).floor();
    //     let rect = [idx.$multiply(area), idx.$multiply(area).add(area)];

    //     let t1 = sound.timeDomainTo( area, rect[0].$subtract(0, area.y/2) );
    //     let t2 = t1.map( t => t.$add(0, area.y) ).reverse();
    //     let freqs = sound.freqDomainTo( [area.x, area.y/2], [rect[0].x, 0] ).map( f => [[f.x, rect[0].y+area.y/2-f.y], [f.x, rect[0].y+area.y/2+f.y]] );
    //     form.fillOnly("#fe3").polygon( t1.concat(t2) );
    //     form.strokeOnly("#62e", Math.ceil(area.x/128) ).lines( freqs );

    //     let key = ["C3", "E3", "G3", "C4", "E4", "G4", "C5", "E5", "G5"][ idx.y*3+idx.x ];
    //     form.font(120, 'bold').fillOnly("#fff").text( rect[0].$add( 10, 110 ), key );
    //     if (!index.equals(idx)) { // play if on different area
    //       synth.triggerAttackRelease( key, '4n');
    //       index = idx;
    //     }
    //   },
    //   action: (type, x, y) => {
    //     if (type === "up") { // for safari
    //       if (synth.context.state === 'suspended') {
    //         synth.context.resume();
    //       }
    //     }
    //   }
    // });
    // space.bindMouse().bindTouch().play();
  }

  render() {
    return <div id="pt"></div>;
  }
}
