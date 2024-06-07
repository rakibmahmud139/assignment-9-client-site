"use client";

import { useGetAllUserQuery } from "@/redux/features/user/userApi";
import { TUser } from "@/types";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const AboutCard = () => {
  const { data: users } = useGetAllUserQuery({});

  return (
    <Grid container>
      {users?.data.map((user: TUser) => (
        <Grid item md={4} gap={1} key={user.id}>
          <Card sx={{ maxWidth: 345, borderRadius: "48px", color: "#bbdefb" }}>
            <CardActionArea
              sx={{
                textAlign: "center",
              }}
            >
              <Avatar
                alt={user?.name}
                src={user?.userProfile?.photoUrl}
                sx={{ width: 120, height: 120, my: "32px", mx: "auto" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutCard;
