import Tone from "tone";
import noteToFrequency from "note-to-frequency";

class SynthEngine {
  constructor(initialState) {
    this.state = {
      audio: null,
      frequency: 440
    };
    this.noteFrequency = "880";

    this.limiter = new Tone.Limiter(-10);
    this.chorus = new Tone.Chorus(4, 2.5, 0.5);
    this.masterBus = new Tone.Gain().chain(
      this.limiter,
      // this.chorus,
      Tone.Master
    );
    // this.analyser = new Tone.Analyser(["fft"], ["2048"]);
    this.hpf = new Tone.Filter(20, "highpass");
    this.vcf = new Tone.Filter(10000, "lowpass", -24);
    this.env = new Tone.AmplitudeEnvelope(0.1, 0.2, 0.4, 0.2);
    this.vca = new Tone.Gain(1);
    this.sawOsc = new Tone.Oscillator(this.state.frequency, "sawtooth").start();
    this.pulseOsc = new Tone.PulseOscillator(880, 0.4).start();
    this.subOsc = new Tone.Oscillator(110, "sawtooth").start();
    this.noiseOsc = new Tone.NoiseSynth();

    this.sawOsc.chain(this.hpf, this.vcf, this.vca, this.env, this.masterBus);

    // this.oscArray = [this.sawOsc, this.pulseOsc, this.subOsc, this.noiseOsc];

    // this.polySynth = new Tone.PolySynth(5, this.oscArray);

    this.testSynth = new Tone.Synth();
    // this.sawOsc.chain(this.vcf, this.env, this.masterBus);

    //   if PulseOsc = 1(
    //   this.testSynth.chain(
    //     this.highpassFilterNode,
    //     this.chorusNode,
    //     this.masterBus
    //   );
    // )

    // this.createOscillatorSettingCallbacks();
    // this.initInitialSettings(initialState);
    // this.noteToFrequency = this.noteToFrequency.bind(this);
  }

  // getFrequencyFromNote(note) {
  //   var notes = [
  //       "A",
  //       "A#",
  //       "B",
  //       "C",
  //       "C#",
  //       "D",
  //       "D#",
  //       "E",
  //       "F",
  //       "F#",
  //       "G",
  //       "G#"
  //     ],
  //     octave,
  //     keyNumber;

  //   if (note.length === 3) {
  //     octave = note[2];
  //   } else {
  //     octave = note[1];
  //   }

  //   keyNumber = notes.indexOf(note.slice(0, -1));

  //   if (keyNumber < 3) {
  //     keyNumber = keyNumber + 12 + (octave - 1) * 12 + 1;
  //   } else {
  //     keyNumber = keyNumber + (octave - 1) * 12 + 1;
  //   }

  //   // Return frequency of note
  //   return 440 * Math.pow(2, (keyNumber - 49) / 12);
  // }

  // draw() {
  //   let drawVisual = requestAnimationFrame(draw);

  //   analyser.getByteTimeDomainData(dataArray);

  //   canvasCtx.fillStyle = "#DBD5C9";
  //   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  //   canvasCtx.lineWidth = 2;
  //   canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  //   canvasCtx.beginPath();

  //   var sliceWidth = (WIDTH * 1.0) / bufferLength;
  //   var x = 0;

  //   for (var i = 0; i < bufferLength; i++) {
  //     var v = dataArray[i] / 128.0;
  //     var y = (v * HEIGHT) / 2;

  //     if (i === 0) {
  //       canvasCtx.moveTo(x, y);
  //     } else {
  //       canvasCtx.lineTo(x, y);
  //     }

  //     x += sliceWidth;
  //   }

  //   canvasCtx.lineTo(canvas.width, canvas.height / 2);
  //   canvasCtx.stroke();
  // }

  triggerAttack(note) {
    // this.noteFrequency = noteToFrequency(note);
    this.env.triggerAttack();
  }

  // triggerAttack(note) {
  //   // this.noteFrequency = this.getFrequencyFromNote(note);
  //   this.env.triggerAttack();
  // }

  triggerRelease() {
    this.env.triggerRelease();
  }

  setFrequency(val) {
    this.sawOsc.frequency.value = val;

    // this[name](val);
    // this.setState({ frequency: val });
    // this.noteFrequency.setFrequency();
    // this.setState({
    //   frequency: frequency
    // })
  }

  // triggerAttack(freq) {
  //   this.sawOsc.frequency = freq;
  //   this.env.triggerAttack();
  // }

  static get TOP_LEVEL_SETTINGS() {
    return [
      "chorus",
      "volume",
      "filterCutoff",
      "frequency",
      "pitch",
      "filterQ",
      "filterType"
    ];
  }

  updateSetting(name, val) {
    if (this.constructor.TOP_LEVEL_SETTINGS.includes(name)) {
      this[name](val);
    } else {
      this[name](val);
    }
  }

  vcaLevel(val) {
    this.vca.gain.value = val;
  }

  chorus(val) {
    console.log("ToneSynth.chorus", val);
    this.chorusNode.wet.value = val;
  }

  volume(val) {
    Tone.Master.volume.value = val;
  }

  filterCutoff(val) {
    this.vcf.frequency.value = val;
  }

  filterCutoff(val) {
    this.vcf.frequency.value = val;
  }

  filterQ(val) {
    this.vcf.Q.value = val;
  }

  highpassFilterCutoff(val) {
    this.highpassFilterNode.frequency.value = val;
  }

  envelopeAttack(val) {
    this.env.attack = val;
  }

  envelopeDecay(val) {
    this.env.decay = val;
  }

  envelopeSustain(val) {
    this.env.sustain = val;
  }

  envelopeRelease(val) {
    this.env.release = val;
  }
}

export default SynthEngine;
