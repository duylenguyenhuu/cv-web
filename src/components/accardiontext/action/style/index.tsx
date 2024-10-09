import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const IStyle = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        [".MuiPaper-root"]: { boxShadow: " none !important" },
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120, boxShadow: "none" }}>
        <FormHelperText sx={{ margin: "unset" }}>With label</FormHelperText>
        <Select
          className="Duy"
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ boxShadow: "none !important" }}
        >
          <MenuItem value="">
            <em>Classic</em>
          </MenuItem>
          <MenuItem value={10}>Modern</MenuItem>
          <MenuItem value={20}>Professional</MenuItem>
          <MenuItem value={30}>Elegant</MenuItem>
          <MenuItem value={30}>Tech</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default IStyle;
