import FLForms from "@/components/forms/FLForms";
import FLInput from "@/components/forms/FLInput";
import FileUploader from "@/components/forms/FileUploader";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/features/auth/authApi";
import { imageUpload } from "@/utils/imageUpload";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateUserForm = () => {
  const router = useRouter();
  const { data: user } = useGetMyProfileQuery({});
  const [updateProfile] = useUpdateMyProfileMutation();

  const handleUpdateUser = async (formData: FieldValues) => {
    const photoUrl = await imageUpload(formData.file);

    if (photoUrl) {
      const resData = {
        bio: formData.bio,
        age: Number(formData.age),
        photoUrl,
      };

      const res = await updateProfile(resData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        router.refresh();
      }
    } else if (!photoUrl) {
      const updateData = {
        bio: formData.bio,
        age: Number(formData.age),
      };

      const res = await updateProfile(updateData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        router.refresh();
      }
    }
  };
  return (
    <Box>
      {user?.data ? (
        <FLForms onSubmit={handleUpdateUser} defaultValues={user?.data}>
          <Grid container spacing={4}>
            <Grid item md={12} xs={12}>
              <FLInput
                name="age"
                label="Age"
                placeholder="Age "
                required={true}
                fullWidth={true}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <FLInput
                name="bio"
                label="Bio"
                placeholder="Bio"
                required={true}
                fullWidth={true}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <FileUploader name="file" label="Photo" fullWidth={true} />
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            type="submit"
            sx={{
              mt: "28px",
            }}
          >
            Update
          </Button>
        </FLForms>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default UpdateUserForm;
