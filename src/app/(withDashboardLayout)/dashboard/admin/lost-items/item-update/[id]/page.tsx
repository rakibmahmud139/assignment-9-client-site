import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import UpdateItemForm from "../components/UpdateItemForm";

type TProps = {
  itemId: string;
};

const UpdateItemPage = ({ params }: { params: { id: string } }) => {
  return (
    <Box mb={36}>
      <Heading title="Update Lost Item" />
      <UpdateItemForm itemId={params.id} />
    </Box>
  );
};

export default UpdateItemPage;
