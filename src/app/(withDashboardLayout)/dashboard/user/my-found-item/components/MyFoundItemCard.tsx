"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import {
  useDeleteFoundItemMutation,
  useGetFoundItemQuery,
} from "@/redux/features/foundItem/foundItemApi";
import { TFoundItem } from "@/types/common";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import UpdateStatus from "./UpdateStatus";

const MyFoundItemCard = () => {
  const { data: user } = useGetMyProfileQuery({});
  const [deleteFoundItem] = useDeleteFoundItemMutation();

  const { data: foundItems } = useGetFoundItemQuery({
    email: user?.data?.user?.email,
  });

  const handleDelete = async (id: string) => {
    const res = await deleteFoundItem(id).unwrap();

    if (res?.success) {
      toast.success(res.message);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {foundItems?.data?.map((foundItem: TFoundItem) => (
          <Grid key={foundItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                src={foundItem?.photo}
                alt="FoundItemImage"
                width={345}
                height={120}
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {foundItem?.foundItemName}
                </Typography>
                <Typography mt={1}>
                  <Typography variant="h6">Location:</Typography>
                  {foundItem?.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" my={1}>
                  <Typography variant="h6">Date:</Typography>
                  {foundItem?.date?.substring(0, 10)}
                </Typography>
                <UpdateStatus id={foundItem?.id} />
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href={`my-found-item/update/${foundItem?.id}`}>
                  <Button>Edit</Button>
                </Link>

                <Button
                  onClick={() => handleDelete(foundItem?.id)}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyFoundItemCard;
