import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import UpdateLostItemForm from "../components/UpdateLostItemForm";

type TProps = {
  itemId: string;
};

const UpdateLostItemPage = ({ params }: { params: TProps }) => {
  return (
    <Box mb={36}>
      <Heading title="Update Lost Item" />
      <UpdateLostItemForm itemId={params.itemId} />
    </Box>
  );
};

export default UpdateLostItemPage;
