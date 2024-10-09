import { Box } from "@mui/material";
import MainLeft from "./left";
import MainRight from "./right";

const BodyCV = () => {
  return (
    <Box className="grid grid-cols-12">
      <Box className="col-span-3">
        <MainLeft />
      </Box>
      <Box className="col-span-9">
        <MainRight />
      </Box>
    </Box>
  );
};

export default BodyCV;
