"use client";

import ClaimModal from "@/components/claimModal/ClaimModal";
import { useGetFoundItemQuery } from "@/redux/features/foundItem/foundItemApi";
import { TFoundItem } from "@/types/common";
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
import PlaceIcon from "@mui/icons-material/Place";

const FoundItemsCard = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { data: foundItems } = useGetFoundItemQuery({});

  return (
    <Box mb={4} mx={12}>
      <Grid container spacing={4}>
        {foundItems?.data?.map((item: TFoundItem) => (
          <Grid key={item.id} item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: 600 }}>
              <CardActionArea>
                <Image
                  src={item?.photo}
                  alt="image"
                  width={345}
                  height={200}
                  style={{ height: 200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.foundItemName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <PlaceIcon /> {item?.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {item?.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  sx={{ bgcolor: "#32c2c7" }}
                  onClick={() => setIsOpenModal(true)}
                >
                  Claim
                </Button>
                <ClaimModal
                  open={isOpenModal}
                  setOpen={setIsOpenModal}
                  foundItemId={item?.id}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoundItemsCard;
