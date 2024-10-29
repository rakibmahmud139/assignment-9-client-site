import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import ItemUpdateForm from "../components/ItemUpdateForm";

type TProps = {
  itemId: string;
};

const UpdateFoundItemPage = ({ params }: { params: { id: string } }) => {
  return (
    <Box mb={36}>
      <Heading title="Update Found Item" />
      <ItemUpdateForm itemId={params.id} />
    </Box>
  );
};

export default UpdateFoundItemPage;
