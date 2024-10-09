import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

interface IAccardion {
  icon: React.ReactNode;
  label: string;
}
const listIcon: IAccardion[] = [
  {
    icon: <AccountCircleOutlinedIcon />,
    label: "Contact Information",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 4.87129C2 4.39009 2.40701 4 2.90909 4H13.6529H17.7851C18.2872 4 18.6942 4.39009 18.6942 4.87129V8.75247H21.0909C21.593 8.75247 22 9.14256 22 9.62376V14.3762C22 14.8574 21.593 15.2475 21.0909 15.2475H18.6942V19.1287C18.6942 19.6099 18.2872 20 17.7851 20H13.6529H2.90909C2.40701 20 2 19.6099 2 19.1287V14.3762C2 13.895 2.40701 13.5049 2.90909 13.5049H5.30579V10.4951H2.90909C2.40701 10.4951 2 10.105 2 9.62376V4.87129ZM16.0496 13.505L13.6529 13.5049L7.12397 13.505V10.4951L16.0496 10.4951V13.505ZM12.7438 15.2475L3.81818 15.2475V18.2574H12.7438V15.2475ZM14.562 18.2574H16.876V15.2475L14.562 15.2475V18.2574ZM17.8678 10.4951V13.505H20.1818V10.4951H17.8678ZM16.876 5.74258V8.75248H14.562V5.74258H16.876ZM12.7438 5.74258V8.75248L6.21488 8.75247L6.21155 8.75248H3.81818V5.74258H12.7438Z"
        ></path>
      </svg>
    ),
    label: "Education",
  },
  {
    icon: <TocOutlinedIcon />,
    label: "Skills",
  },
  {
    icon: <LanguageOutlinedIcon />,
    label: "Languages",
  },
  {
    icon: <DataObjectOutlinedIcon />,
    label: "Objective",
  },
  {
    icon: <AccountTreeOutlinedIcon />,
    label: "Project",
  },
];
const AccordionPros = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          borderBottomColor: "-moz-initial",
          borderBottom: "2px",
          backgroundColor: "rgb(240,243,245)",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ArticleOutlinedIcon />
          <Typography sx={{ width: "50%", flexShrink: 0, marginLeft: "12px" }}>
            Sections
          </Typography>
        </AccordionSummary>
        {listIcon.map((recuse, index) => (
          <AccordionDetails key={index} className=" border-x-2 border-b-2">
            <Typography>
              <Box className="flex cursor-pointer">
                <Box className="hover:text-blue-400"> {recuse.icon}</Box>
                <p className="pl-3">{recuse.label}</p>
              </Box>
            </Typography>
          </AccordionDetails>
        ))}
      </Accordion>
    </Box>
  );
};

export default AccordionPros;
