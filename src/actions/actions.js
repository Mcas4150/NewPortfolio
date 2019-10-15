import {
  CHANGE_DIAL,
  CHANGE_WAVEFORM,
  CHANGE_FILTER_TYPE,
  SAW_START,
  TRIGGER_MASTER,
  TRIGGER_ATTACK,
  TRIGGER_RELEASE,
  NOTE_PRESS,
  NOTE_RELEASE,
  SET_FREQUENCY
} from "./types";

export const changeDial = dial => {
  return {
    type: CHANGE_DIAL,
    payload: dial
  };
};

export const changeWaveform = select => {
  return {
    type: CHANGE_WAVEFORM,
    payload: select
  };
};

export const changeFilterType = val => {
  return {
    type: CHANGE_FILTER_TYPE,
    payload: val
  };
};

export const sawStart = note => {
  return {
    type: SAW_START,
    payload: note
  };
};

export const triggerMaster = note => {
  return {
    type: TRIGGER_MASTER,
    payload: note
  };
};

export const triggerAttack = note => {
  return {
    type: TRIGGER_ATTACK,
    payload: note
  };
};

export const triggerRelease = note => {
  return {
    type: TRIGGER_RELEASE,
    payload: note
  };
};


export const notePress = note => {
  return {
    type: NOTE_PRESS,
    payload: note
  };
};

export const setFrequency = frequency => {
  return {
    type: SET_FREQUENCY,
    payload: frequency
  };
};

export const noteRelease = note => {
  return {
    type: NOTE_RELEASE,
    payload: note
  };
};

