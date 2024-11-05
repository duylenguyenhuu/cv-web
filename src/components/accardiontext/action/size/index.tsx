import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const ISize = () => {
  const [devices, setDevices] = useState("phone");

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string | null
  ) => {
    if (newDevices !== null) {
      setDevices(newDevices);
    }
  };

  return (
    <Box>
      <Box className="leading-6 font-medium text-xs tracking-wide text-[rgba(90, 94, 97, 0.75)]">
        Size
      </Box>
      <ToggleButtonGroup
        className="h-10 p-2 border-[ rgb(181, 186, 189)] border-2"
        exclusive
        value={devices}
        onChange={handleDevices}
      >
        <ToggleButton className="border-2" value="laptop">
          <p className="text-xs w-full ">Aa</p>
        </ToggleButton>
        <ToggleButton value="tv">
          <p className="text-sm m-0 w-full ">Aa</p>
        </ToggleButton>
        <ToggleButton value="phone">
          <p className="text-base m-0 w-full ">Aa</p>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
export default ISize;
