import { useContext, createContext } from "react";

export const AccordionItemContext = createContext(null);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within AccordionItem.",
    );
  }

  return context;
};
