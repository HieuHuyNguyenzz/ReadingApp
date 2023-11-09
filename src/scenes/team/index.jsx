import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Button from "@mui/material/Button";
import React, { Fragment, useEffect, useState } from "react";
import bookApis from "../api";
import { fetchStatusEnum } from "../constants";
import profileStore from "../LoginStore/LS";

const Team = () => {
  const [profile, setProfile] = useState([]);
  const theme = useTheme();
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [selectedProfile, setselectedProfile] = useState({});
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setStatus(fetchStatusEnum.LOADING);
    bookApis.getUser((profile) => {
      setStatus(fetchStatusEnum.SUCCESS);
      setProfile(profile);
    });
  }, []);
  const handleDelete = () => {
    alert("Delete");
  };

  const handleEdit = () => {
    alert("Fix");
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "userName",
      headerName: "userName",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "fullName",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
    },
    {
      field: "usersPassword",
      headerName: "usersPassword",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Fragment>
      <Box m="20px">
        <Header title="User" subtitle="" />
        <Box display="flex" gap={2}>
          <Button variant="contained" color="secondary">
            Thêm
          </Button>
          <Button variant="contained" color="secondary">
            Sửa
          </Button>
          <Button variant="contained" color="secondary">
            Xóa
          </Button>
        </Box>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            checkboxSelection
            rows={profile}
            columns={columns}
            hideFooter={true}
            loading={status === fetchStatusEnum.LOADING}
            // onRowClick={(params) => onSelectBook(params.row)}
            disableMultipleRowSelection={true}
          />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Team;
