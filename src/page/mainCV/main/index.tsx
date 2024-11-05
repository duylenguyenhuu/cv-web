import { Box } from "@mui/material";
import MainLeft from "./left";
import MainRight from "./right";

const BodyCV = () => {
  return (
    <Box className="grid grid-cols-12">
      <Box className="col-span-3 bg-[rgb(240,243,245)] ">
        <MainLeft />
      </Box>
      <Box className="col-span-9 bg-[#D9DDE0] bg-[url('https://app.resumecoach.com/editor/images/loader/dotted-background-pattern-4rbJ.png')]">
        <MainRight />
      </Box>
    </Box>
  );
};

export default BodyCV;
