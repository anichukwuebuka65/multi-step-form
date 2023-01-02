import { createContext, useState } from "react";
import initialValues from "../../functions/data";
import { useContext } from "react";

const FormContext = createContext();

export function useGetContext() {
  return useContext(FormContext);
}

function FormContextProvider({ children }) {
  const [data, setData] = useState(initialValues);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
