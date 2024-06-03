import { Typography } from "@mui/material";

const Heading = ({ title }: { title: string }) => {
  return (
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
      {title}
      <Typography component="span" color="gold" fontSize="36px">
        ***
      </Typography>
    </Typography>
  );
};

export default Heading;
