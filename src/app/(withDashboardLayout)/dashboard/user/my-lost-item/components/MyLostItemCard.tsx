"use client";

import { useGetMyProfileQuery } from "@/redux/features/auth/authApi";
import {
  useDeleteLostItemMutation,
  useGetLostItemQuery,
} from "@/redux/features/lostItem/lostItemApi";
import { TLostItem } from "@/types";
import {
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

const MyLostItemCard = () => {
  const { data: user } = useGetMyProfileQuery({});
  const [deleteLostItem] = useDeleteLostItemMutation();

  const { data: lostItems } = useGetLostItemQuery({
    email: user?.data?.user?.email,
  });

  const handleDelete = async (id: string) => {
    const res = await deleteLostItem(id).unwrap();

    if (res?.success) {
      toast.success(res.message);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {lostItems?.data?.map((lostItem: TLostItem) => (
          <Grid key={lostItem?.id} item md={4}>
            <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
              <Image
                src={lostItem?.photo}
                alt="lostItemImage"
                width={345}
                height={60}
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {lostItem?.lostItemName}
                </Typography>
                <Typography mt={1}>
                  <Typography variant="h6">Location:</Typography>
                  {lostItem?.location}
                </Typography>
                <Typography variant="body2" color="text.secondary" my={1}>
                  <Typography variant="h6">Date:</Typography>
                  {lostItem?.date?.substring(0, 10)}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href={`my-lost-item/update/${lostItem?.id}`}>
                  <Button>Edit</Button>
                </Link>

                <Button
                  onClick={() => handleDelete(lostItem?.id)}
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
    </div>
  );
};

export default MyLostItemCard;
