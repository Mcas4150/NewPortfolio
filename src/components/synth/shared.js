import React, { useContext, useEffect, useState } from "react";

export const WebAudioContext = React.createContext(null);
export const OutputContext = React.createContext(null);

export const useWebAudio = () => useContext(WebAudioContext);

export const useOutput = () => useContext(OutputContext);

export const provideOutput = (output, children) => (
  <OutputContext.Provider value={output}>{children}</OutputContext.Provider>
);

export const useConnectToOutput = (node) => {
  const output = useContext(OutputContext);
  useEffect(() => {
    if (!node) return;
    node.connect(output);
    return () => node.disconnect(output);
  }, [node, output]);
};

export const useAudioParamValue = (audioParam, value) => {
  useEffect(() => {
    if (typeof value === "undefined") return;
    audioParam.value = value;
  }, [audioParam, value]);
};

export const useAudioFieldValue = (node, field, value) => {
  useEffect(() => {
    if (typeof value === "undefined") return;
    node[field] = value;
  }, [node, field, value]);
};

export const useStartAudioNode = (node) => {
  useEffect(() => {
    node.start(0);
    return () => node.stop(0);
  }, [node]);
};
