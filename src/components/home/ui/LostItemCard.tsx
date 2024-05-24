import { TLostItem } from "@/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

type TProps = {
  lostItem: TLostItem;
};

const LostItemCard = ({ lostItem }: TProps) => {
  return (
    <Grid item md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Image
          src={lostItem?.photo}
          alt="LostItemImage"
          width={140}
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {lostItem?.lostItemName}
          </Typography>
          <Typography>Location: {lostItem?.location}</Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {lostItem?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/lost-items/${lostItem?.id}`}>
            <Button>details</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LostItemCard;
