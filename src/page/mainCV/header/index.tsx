import { Option, Select, SelectOption, SelectValue } from '@mui/base';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LanguageIcon from '@mui/icons-material/Language';
import { Language, useLanguageContext } from '../../../components';
import './styles.scss';
interface ILanguageOption {
  id: Language;
  label: string;
  value: Language;
}

const languages: ILanguageOption[] = [
  {
    id: Language.ANDORRA,
    label: 'Andorra',
    value: Language.ANDORRA,
  },
  {
    id: Language.USA,
    label: 'USA',
    value: Language.USA,
  },
  {
    id: Language.FRANCE,
    label: 'France',
    value: Language.FRANCE,
  },
];

// type Language = typeof languages;

const Header = () => {
  const { language, setLanguage } = useLanguageContext();

  const handleChangeLanguage = (
    _event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    value: SelectValue<Language, false>
  ) => {
    if (value) {
      setLanguage(value);
    }
  };

  return (
    <>
      <div className="header h-16 grid grid-cols-12">
        <div className=" flex items-center justify-center px-6 col-span-2 border-r-2 border-[rgb(231, 235, 238)]">
          <div className="navbar-log">.</div>
        </div>
        <div className="col-span-8"></div>
        <div className="content-center col-span-1 border-r">
          <Select
            className="rounded-sm w-1/2 bg-[#F0F3F5] cursor-pointer"
            placeholder="country…"
            onChange={handleChangeLanguage}
            renderValue={() => {
              return (
                <img
                  loading="lazy"
                  width={20}
                  height={14}
                  srcSet={toFlagCdnImageUrl(language)}
                  src={toFlagCdnImageUrl(language)}
                  alt={`Flag of ${languages.find((e) => e.value === language)}`}
                  className="mx-1"
                />
              );
            }}
          >
            {languages.map((country) => (
              <Option
                key={country.id}
                value={country.value}
                label={country.label}
                className="flex border-b-[1px] w-[100px] p-2 hover:bg-[#F5F5F5]"
              >
                <img
                  loading="lazy"
                  width={20}
                  height={14}
                  srcSet={toFlagCdnImageUrl(country.id)}
                  src={toFlagCdnImageUrl(country.id)}
                  alt={`Flag of ${country.label}`}
                  className="mx-1"
                />
                {country.label}
              </Option>
            ))}
          </Select>
        </div>
        <div className="col-span-1 flex items-center justify-center hover:text-blue-500">
          <HomeTwoToneIcon className=" cursor-pointer" />
        </div>
      </div>
    </>
  );
};
export default Header;

function toFlagCdnImageUrl(language: Language): string {
  return `https://flagcdn.com/w20/${language.toLowerCase()}.png`;
}
