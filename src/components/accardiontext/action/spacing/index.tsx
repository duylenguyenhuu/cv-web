import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const Spacing = () => {
  const inputSpacing = [1, 1.15, 1.5, 2, 2.5];
  const [sizeIndex, setSizeIndex] = useState(0);

  const handlePush = () => {
    if (sizeIndex < inputSpacing.length - 1) {
      setSizeIndex(sizeIndex + 1);
    }
  };

  const handleRemove = () => {
    if (sizeIndex > 0) {
      setSizeIndex(sizeIndex - 1);
    }
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120, boxShadow: "none" }}>
      <FormHelperText sx={{ margin: "unset" }}>Spacing</FormHelperText>
      <Box className=" flex border-2 border-[#B5BABD]">
        <Button onClick={handleRemove} sx={{ color: "black" }}>
          <RemoveIcon />
        </Button>
        <input
          disabled
          className="w-16 border-x-2 my-1"
          value={inputSpacing[sizeIndex]}
        ></input>
        <Button onClick={handlePush} size="small" sx={{ color: "black" }}>
          <AddIcon />
        </Button>
      </Box>
    </FormControl>
  );
};
export default Spacing;
