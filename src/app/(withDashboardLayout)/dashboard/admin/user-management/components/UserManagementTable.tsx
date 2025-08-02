"use client";

import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/user/userApi";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { toast } from "sonner";
import Link from "next/link";

const UserManagementTable = () => {
  const { data: users, isLoading } = useGetAllUserQuery({});
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteUser(id).unwrap();

    if (res?.success) {
      toast.success(res?.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
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

            <Link href={`/dashboard/admin/user-management/${row?.id}`}>
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
    <div className="xl:mb-48">
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
            rows={users?.data ?? []}
            columns={columns}
            hideFooterPagination={true}
            hideFooter={true}
          />
        )}
      </Box>
    </div>
  );
};

export default UserManagementTable;
