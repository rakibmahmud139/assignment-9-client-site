"use client";

import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import { useAddCategoryMutation } from "@/redux/features/category/categoryApi";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddCategoryForm = () => {
  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const handleAddCategory = async (data: FieldValues) => {
    const res = await addCategory(data).unwrap();

    if (res.success) {
      toast.success(res.message);
    }
  };

  const defaultValue = {
    name: "",
  };

  return (
    <FLForms onSubmit={handleAddCategory} defaultValues={defaultValue}>
      <Grid container spacing={4}>
        <Grid item md={12} xs={12}>
          <FLInput
            name="name"
            label="Name"
            placeholder="Name"
            required={true}
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <Button
        size="small"
        disabled={isLoading}
        type="submit"
        sx={{
          mt: "28px",
        }}
      >
        Add Category
      </Button>
    </FLForms>
  );
};

export default AddCategoryForm;
