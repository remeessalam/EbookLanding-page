import { createContext, useState } from "react";

export const SpinnerContext = createContext(null);

const SpinnerContextProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);
  return (
    <SpinnerContext.Provider
      value={{
        spinner,
        setSpinner,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerContextProvider;
