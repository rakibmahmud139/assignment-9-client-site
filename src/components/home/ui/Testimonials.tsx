import { Box, Rating, Typography } from "@mui/material";

const Testimonials = async () => {
  const res = await fetch("http://localhost:5000/api/review");
  const { data: reviews } = await res.json();
  console.log(reviews);
  return (
    <Box mt={16}>
      <Typography
        textAlign="center"
        component="h1"
        variant="h4"
        borderBottom={1}
        borderColor="pink"
        width={320}
        mx="auto"
      >
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
        Testimonials
        <Typography component="span" color="gold" fontSize="36px">
          ***
        </Typography>
      </Typography>
      <Box>
        {reviews?.map((review) => (
          <Rating
            key={review.id}
            name="read-only"
            value={review?.ratting}
            readOnly
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
