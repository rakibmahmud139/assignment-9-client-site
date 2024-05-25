import { Button, SxProps, Input } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  fullWidth?: boolean;
};

const FileUploader = ({ name, label, sx, fullWidth }: TProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<FileUploadIcon />}
            sx={{ ...sx }}
          >
            {label || "Profile"}
            <Input
              {...field}
              type={name}
              fullWidth={fullWidth}
              value={value?.fileName}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement).files?.[0])
              }
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
};

export default FileUploader;
