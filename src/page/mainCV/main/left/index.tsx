import { Box, Button, Typography } from '@mui/material';
import AccordionPros from '../../../../components/accardion';
import AccordionText from '../../../../components/accardiontext';
import AcCardinColor from '../../../../components/accardiontColour';
import { useTranslation } from 'react-i18next';

const MainLeft = () => {
  const { t } = useTranslation();
  return (
    <Box
      className="bg-[rgb(240,243,245)] overflow-y-auto h-[93vh] relative"
      sx={{ padding: '0px 8px 24px 24px' }}
    >
      <Box>
        <Typography
          className=" flex items-center justify-center font-sans w-full pt-1 text-xl font-medium"
          variant="h6"
          gutterBottom
        >
          {t('here is your cv')}
        </Typography>
      </Box>
      <Box className="top-0 z-50 sticky pt-4 bg-slate-100">
        <Box className="flex justify-center border-b-[1px] border-b-[#D9DDE0] pb-4 ">
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: '50px' }}
          >
            Download
          </Button>
        </Box>
      </Box>
      <Box className="mt-9">
        <AccordionPros />
        <AccordionText />
        <AcCardinColor />
      </Box>
    </Box>
  );
};

export default MainLeft;
