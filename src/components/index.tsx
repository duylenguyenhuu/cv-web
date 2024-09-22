import { createContext, ReactNode, useContext, useState } from "react";

export enum Language {
  VIETNAMESE = "vn",
  ENGLISH = "eng",
  FRANCE = "fr",
  USA = "us",
}

interface ILanguageProps {
  language: Language;
  setLanguage: (value: Language) => void;
}
export const LanguageContext = createContext<ILanguageProps>({
  language: Language.ENGLISH,
  setLanguage: () => {},
});

export const LanguageContextProvider: React.ComponentType<{
  children: ReactNode;
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);

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
