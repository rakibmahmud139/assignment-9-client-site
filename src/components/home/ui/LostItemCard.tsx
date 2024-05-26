import { TLostItem } from "@/types";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

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
          width={345}
          height={120}
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
