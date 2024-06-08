import { Box, Typography } from "@mui/material";
import MetricsData from "./components/MetricsData";
import Heading from "@/components/shared/Heading";

const MetricsPage = () => {
  return (
    <Box
      mb={{
        md: 48,
        xs: 8,
      }}
    >
      <Heading title="Data Metrics" />
      <Box>
        <MetricsData />
      </Box>
    </Box>
  );
};

export default MetricsPage;
