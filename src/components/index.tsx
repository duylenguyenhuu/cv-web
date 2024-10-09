import { createContext, ReactNode, useContext, useState } from "react";

export enum Language {
  VIETNAMESE = "vn",
  FRANCE = "fr",
  USA = "us",
  ANDORRA = "ad",
}

interface ILanguageProps {
  language: Language;
  setLanguage: (value: Language) => void;
}
export const LanguageContext = createContext<ILanguageProps>({
  language: Language.USA,
  setLanguage: () => {},
});

export const LanguageContextProvider: React.ComponentType<{
  children: ReactNode;
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.USA);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
