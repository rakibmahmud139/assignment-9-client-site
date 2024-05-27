import { Box, Typography } from "@mui/material";
import MetricsData from "./components/MetricsData";

const MetricsPage = () => {
  return (
    <Box>
      <Typography
        textAlign="center"
        component="h1"
        variant="h4"
        borderBottom={1}
        width={420}
        mx="auto"
        mb={8}
      >
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
        Data Metrics
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
      </Typography>
      <Box>
        <MetricsData />
      </Box>
    </Box>
  );
};

export default MetricsPage;
