import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid2,
  Typography,
} from "@mui/material";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IStyle from "./action/style";
import ISize from "./action/size";

const AccordionText = () => {
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
          <TitleOutlinedIcon />
          <Typography sx={{ width: "50%", flexShrink: 0, marginLeft: "12px" }}>
            Sections
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <Grid2
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid2 className="w-full" size={6}>
                <IStyle />
              </Grid2>
              <Grid2 size={6}>
                <ISize />
              </Grid2>
              <Grid2 size={6}>
                <div>3</div>
              </Grid2>
              <Grid2 size={6}>
                <div>4</div>
              </Grid2>
            </Grid2>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionText;
