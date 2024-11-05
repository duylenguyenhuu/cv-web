import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

const MainRight = () => {
  return (
    <Box className="w-full bg-red-400">
      <Box className="flex justify-between w-44">
        <p>Document untitled</p>
        <CreateIcon />
      </Box>
    </Box>
  );
};
export default MainRight;
