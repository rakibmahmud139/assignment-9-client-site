"use client";

import ClaimModal from "@/components/claimModal/ClaimModal";
import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
const FoundItemCard = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { data: foundItems } = useGetFoundItemQuery({});

  return (
    <Box mb={4}>
      <Container>
        <Grid container spacing={4}>
          {foundItems?.data?.map((item) => (
            <Grid key={item.id} item md={3} xs={12}>
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <Image
                    src={item?.photo}
                    alt="image"
                    width={345}
                    height={200}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.foundItemName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Location: {item?.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description: {item?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setIsOpenModal(true)}
                  >
                    Claim
                  </Button>
                  <ClaimModal open={isOpenModal} setOpen={setIsOpenModal} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FoundItemCard;
