import { Menu, MenuButton, MenuItem } from "@mui/base";
import { Dropdown } from "@mui/base/Dropdown";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useContext } from "react";
import { Language, useLanguageContext } from "../../../components";
import "./styles.scss";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

interface ILanguageOption {
  id: Language;
  label: string;
  value: Language;
}

const languages: ILanguageOption[] = [
  {
    id: Language.ENGLISH,
    label: "English",
    value: Language.ENGLISH,
  },
  {
    id: Language.ENGLISH,
    label: "USA",
    value: Language.ENGLISH,
  },
  {
    id: Language.FRANCE,
    label: "France",
    value: Language.FRANCE,
  },
];

const languages1: ILanguageProps = [
  {
    id: "ENG",
    label: "English",
    value: "ENG",
  },
  {
    id: "US",
    label: "USA",
    value111: "US",
  },
  {
    id: "FRANCE",
    label: "France",
    value123: "FRANCE",
  },
];

// type Language = typeof languages;

type ILanguageProps = {
  id: string;
  label: string;
  value?: string;
  value111?: number;
  value123?: string;
}[];

const Header = () => {
  const { language, setLanguage } = useLanguageContext();

  console.log({ language });

  const [age, setAge] = React.useState("");
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="header h-16 grid grid-cols-12">
        <div className=" px-6 col-span-2 border-r-2 border-[rgb(231, 235, 238)]">
          <div className="navbar-log">.</div>
        </div>
        <div className="col-span-8">
          <span>duyle</span>
        </div>
        <div className="col-span-1">
          <div>
            {/* <FormControl sx={{ m: 1, minWidth: 80, height: 0 }}>
            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your currency"
            ></TextField>
          </FormControl> */}
          </div>
        </div>
      </div>
      <Dropdown
        defaultOpen
        onOpenChange={() => {
          setOpenLanguage(!openLanguage);
          console.log("onOpenChange");
        }}
      >
        <MenuButton>
          <LanguageIcon></LanguageIcon>
        </MenuButton>
        <Menu onItemsChange={(items: string[]) => console.log(items)}>
          {languages.map(({ id, label, value }) => (
            <MenuItem
              key={id}
              onClick={() => {
                setLanguage(value);
                setOpenLanguage(!openLanguage);
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};
export default Header;
