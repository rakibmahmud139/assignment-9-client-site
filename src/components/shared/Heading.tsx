import { Typography } from "@mui/material";

const Heading = ({ title }: { title: string }) => {
  return (
    <Typography
      textAlign="center"
      component="h1"
      fontSize={{
        md: "36px",
        xs: "24px",
      }}
      borderBottom={1}
      width={{
        md: 420,
        xs: 332,
      }}
      mx="auto"
      mb={8}
    >
      <Typography
        component="span"
        color="gold"
        fontSize={{
          md: "36px",
          xs: "24px",
        }}
      >
        ***
      </Typography>
      {title}
      <Typography
        component="span"
        color="gold"
        fontSize={{
          md: "36px",
          xs: "24px",
        }}
      >
        ***
      </Typography>
    </Typography>
  );
};

export default Heading;
