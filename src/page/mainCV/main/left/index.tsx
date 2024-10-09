import { Box, Button, Typography } from "@mui/material";
import AccordionPros from "../../../../components/accardion";
import AccordionText from "../../../../components/accardiontext";

const MainLeft = () => {
  return (
    <Box className="bg-[rgb(240,243,245)] p-2" sx={{ height: "94vh" }}>
      <Box>
        <Typography
          className=" flex items-center justify-center font-sans w-full pt-1 text-xl font-medium"
          variant="h6"
          gutterBottom
        >
          Here is your CV
        </Typography>
      </Box>
      <Box className="flex justify-center border-b-[1px] border-b-[#D9DDE0] pb-4">
        <Button variant="contained" color="error" sx={{ borderRadius: "50px" }}>
          Download
        </Button>
      </Box>
      <Box className="mt-9">
        <AccordionPros />
        <AccordionText />
      </Box>
    </Box>
  );
};

export default MainLeft;
