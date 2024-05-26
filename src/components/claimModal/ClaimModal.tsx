import { FieldValues } from "react-hook-form";
import FLForms from "../forms/FLForms";
import FLInput from "../forms/FLInput";
import FLModal from "../modal/FLModal";
import { Box, Button, Container, Grid } from "@mui/material";
import DatePicker from "../forms/DatePicker";
import FileUploader from "../forms/FileUploader";
import { imageUpload } from "@/utils/imageUpload";
import { useClaimItemMutation } from "@/redux/features/claimItem/claimItemApi";
import { useEffect, useState } from "react";
import { getUser } from "@/services/actions/getUser";
import { DecodedUser } from "@/types";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  foundItemId: string;
};

const ClaimModal = ({ open, setOpen, foundItemId }: TProps) => {
  const [claimItem, { isLoading }] = useClaimItemMutation();

  const handleClaim = async (data: FieldValues) => {
    const photo = await imageUpload(data?.file);

    const resData = {
      foundItemId,
      distinguishingFeatures: data?.distinguishingFeatures,
      thirdPartyConfirmation: data?.thirdPartyConfirmation,
      photo,
      lostDate: data?.lostDate,
      description: data?.description,
      securityFeatures: data?.securityFeatures,
    };

    const res = await claimItem(resData).unwrap();

    if (res?.success) {
      toast.success(res?.message);
      setOpen(false);
    }
  };

  return (
    <FLModal open={open} setOpen={setOpen} title="Claim Item">
      <Box mt={8}>
        <Container>
          <FLForms onSubmit={handleClaim}>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <FLInput
                  name="distinguishingFeatures"
                  label="Distinguishing Features"
                  fullWidth={true}
                  required={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FileUploader name="file" label="Image" fullWidth={true} />
              </Grid>
              <Grid item md={6} xs={12}>
                <FLInput
                  required={true}
                  name="thirdPartyConfirmation"
                  label="ThirdParty Confirmation"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <DatePicker
                  required={true}
                  name="lostDate"
                  label="Lost Date"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FLInput
                  required={true}
                  name="securityFeatures"
                  label="Security Features"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FLInput
                  required={true}
                  name="description"
                  label="Description"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Box textAlign="center" mt={8}>
              <Button type="submit">Claim</Button>
            </Box>
          </FLForms>
        </Container>
      </Box>
    </FLModal>
  );
};

export default ClaimModal;
