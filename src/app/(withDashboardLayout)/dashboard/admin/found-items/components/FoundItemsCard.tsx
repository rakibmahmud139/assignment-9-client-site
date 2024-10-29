"use client";

import Heading from "@/components/shared/Heading";
import {
  useDeleteFoundItemMutation,
  useGetFoundItemQuery,
} from "@/redux/features/foundItem/foundItemApi";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Box, CircularProgress, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const FoundItemsCard = () => {
  // const query: Record<string, unknown> = {};
  // const [searchTerm, setSearchTerm] = useState("");

  // const debounceTerm = useDebounce({
  //   searchQuery: searchTerm,
  //   delay: 1000,
  // });

  // if (!!debounceTerm) {
  //   query["searchTerm"] = searchTerm;
  // }

  const { data: foundItems, isLoading } = useGetFoundItemQuery({});

  const [deleteFoundItem] = useDeleteFoundItemMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteFoundItem(id).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            width: 50,
            height: 50,
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          {params.value ? (
            <Image
              src={params.value}
              alt="Lost Item Image"
              width={50}
              height={50}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <Typography variant="caption" color="textSecondary">
              No Image
            </Typography>
          )}
        </Box>
      ),
    },
    { field: "foundItemName", headerName: "Found Item Name", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box display="flex" justifyContent="space-evenly">
            <IconButton
              onClick={() => handleDelete(row?.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>

            <Link href={`found-items/item-update/${row?.id}`}>
              <IconButton aria-label="edit">
                <ModeEditOutlineIcon sx={{ color: "blue" }} />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Heading title="Recent Found Item" />

      <Box>
        <Box sx={{ height: "100%", width: "100%" }}>
          {isLoading ? (
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
          ) : (
            <DataGrid
              rows={foundItems?.data ?? []}
              columns={columns}
              hideFooterPagination={true}
              hideFooter={true}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FoundItemsCard;
