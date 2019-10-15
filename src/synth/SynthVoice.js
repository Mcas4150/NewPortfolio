class SynthVoice {
//   constructor(initialState) {
//   this.state = {
//     audio: null
//   };
//   this.noteFrequency = "440";
//   }

//   componentWillMount() {
//     // Initialize an audio context
//     this.audioContext = new AudioContext();
//     this._playingNotes = [];
//   }

//   componentWillUnmount() {
//     // Close context on unmount
//     this.audioContext.close();
//   }

//   // shouldComponentUpdate(props) {
//   //   return props.events.length > 0;
//   // }

// componentWillReceiveProps(props) {
//        if (props.events.length) {
//          props.events
//          .forEach(this.processEvent.bind(this));

//        props.dispatch({
//       type: "CLEAR_EVENT_QUEUE"
//       });
//     }

//   }

//   processEvent(event) {
//     switch(event.type) {
//       case 'NOTE_ON':
//         var osc = this.audioContext.createOscillator();
//         osc.frequency.value = this.noteNumberToFrequency(event.key);
//         osc.start(this.audioContext.currentTime);
//         osc.type = 'sawtooth';
//         osc.connect(this.audioContext.destination);
//         this._playingNotes.push({
//           key: event.key,
//           osc
//         })
//         break;
//       case 'NOTE_OFF':
//         this._playingNotes.filter(note => {
//           return note.key === event.key;
//         }).forEach(note => {
//           note.osc.stop(this.audioContext.currentTime);
//         });
//         break;
//     }

//   }

//   render() {
//     return null;
//   }


//   noteNumberToFrequency(num) {
//     // from https://github.com/danigb/midi-freq
//     return Math.pow(2, (num - 69) / 12) * 440;
//   }

// static get TOP_LEVEL_SETTINGS() {
//     return ["chorus", "volume", "filterCutoff", "pitch", "filterQ", "filterType"];
//   }


// updateSetting(name, val) {
//     if (this.constructor.TOP_LEVEL_SETTINGS.includes(name)) {
//       this[name](val);
//     } else {
//       this[name](val);
//     }
//   }











//   triggerAttackRelease(value, freq) {
//     this.testSynth.triggerAttackRelease(value, freq);
//   }

//   triggerAttack(note) {
//     // this.noteFrequency = noteToFrequency(note);
//     this.env.triggerAttack();
//   }

//   // triggerAttack(note) {
//   //   // this.noteFrequency = this.getFrequencyFromNote(note);
//   //   this.env.triggerAttack();
//   // }

//   triggerRelease() {
//     this.env.triggerRelease();
//   }

//   // triggerAttack(freq) {
//   //   this.sawOsc.frequency = freq;
//   //   this.env.triggerAttack();
//   // }





//   vcaLevel(val) {
//     this.vca.gain.value = val;
//   }

//   chorus(val) {
//     console.log("ToneSynth.chorus", val);
//     this.chorusNode.wet.value = val;
//   }

//   volume(val) {
//     Tone.Master.volume.value = val;
//   }

//   filterCutoff(val) {
//     this.vcf.frequency.value = val;
//   }

//   filterCutoff(val) {
//     this.vcf.frequency.value = val;
//   }

//   filterQ(val) {
//     this.vcf.Q.value = val;
//   }

//   highpassFilterCutoff(val) {
//     this.highpassFilterNode.frequency.value = val;
//   }

//   envelopeAttack(val) {
//     this.env.attack = val;
//   }

//   envelopeDecay(val) {
//     this.env.decay = val;
//   }

//   envelopeSustain(val) {
//     this.env.sustain = val;
//   }

//   envelopeRelease(val) {
//     this.env.release = val;
//   }
}


export default SynthVoice;
