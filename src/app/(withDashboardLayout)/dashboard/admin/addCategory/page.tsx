import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import AddCategoryForm from "./components/AddCategoryForm";

const AddCategoryPage = () => {
  return (
    <Box
      mb={{
        md: "348px",
        xs: "248px",
      }}
    >
      <Box>
        <Heading title="Add Category" />
      </Box>
      <Box
        display={{
          md: "flex",
        }}
        justifyContent="center"
        mt={16}
      >
        <AddCategoryForm />
      </Box>
    </Box>
  );
};

export default AddCategoryPage;
