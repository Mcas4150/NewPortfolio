import { createContext } from "react";

const AppContext = createContext({
  showWindow: false,
  toggleWindow: () => {},
});

export default AppContext;
