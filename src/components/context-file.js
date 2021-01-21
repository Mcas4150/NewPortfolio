import { createContext } from "react";

const AppContext = createContext({
  showWindow: false,
  toggleWindow: () => {},
  dimensions: [],
});

export default AppContext;
