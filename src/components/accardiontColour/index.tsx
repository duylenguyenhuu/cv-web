import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const colors = [
  "#99A298",
  "#99A2B2",
  "#BEA9A8",
  "#A3A3A3",
  "#BFB3A6",
  "#DCD0CC",
];
const AcCardinColor = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };
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
          <FormatColorFillOutlinedIcon />
          <Typography sx={{ width: "50%", flexShrink: 0, marginLeft: "12px" }}>
            Color
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {colors.map((color, index) => (
              <IconButton
                key={index}
                onClick={() => handleSelectColor(color)} // Khi click, chọn màu hiện tại
                sx={{
                  border: "2px solid",
                  borderColor:
                    selectedColor === color ? "#25A0F3" : "transparent", // Đổi viền khi active
                  borderRadius: "50%",
                  padding: "0px",
                }}
              >
                <Brightness1Icon
                  sx={{
                    color: color, // Đặt màu cho icon
                    fontSize: "24px",
                  }}
                />
              </IconButton>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AcCardinColor;
