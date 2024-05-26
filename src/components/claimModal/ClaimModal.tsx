import { FieldValues } from "react-hook-form";
import FLForms from "../forms/FLForms";
import FLInput from "../forms/FLInput";
import FLModal from "../modal/FLModal";
import { Box, Button, Container, Grid } from "@mui/material";
import DatePicker from "../forms/DatePicker";
import FileUploader from "../forms/FileUploader";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClaimModal = ({ open, setOpen }: TProps) => {
  const handleClaim = (data: FieldValues) => {
    console.log(data);
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
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FileUploader name="file" label="Image" fullWidth={true} />
              </Grid>
              <Grid item md={6} xs={12}>
                <FLInput
                  name="thirdPartyConfirmation"
                  label="ThirdParty Confirmation"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <DatePicker
                  name="lostDate"
                  label="Lost Date"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FLInput
                  name="securityFeatures"
                  label="Security Features"
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
