import { Box } from "@mui/material";
import UpdateFoundItemForm from "../components/UpdateFoundItemForm";
import Heading from "@/components/shared/Heading";

type TProps = {
  itemId: string;
};

const UpdateFoundItemPage = ({ params }: { params: TProps }) => {
  return (
    <Box mb={36}>
      <Heading title="Update Found Item" />
      <UpdateFoundItemForm itemId={params.itemId} />
    </Box>
  );
};

export default UpdateFoundItemPage;
