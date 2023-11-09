import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { Fragment, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import bookApis from "../api";
import { fetchStatusEnum } from "../constants";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const Invoices = () => {
  const [orders, setOrders] = useState([]);
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [selectedBook, setSelectedBook] = useState({});
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setStatus(fetchStatusEnum.LOADING);
    bookApis.getOrders((orders) => {
      setStatus(fetchStatusEnum.SUCCESS);
      setOrders(orders);
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
      field: "customerName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "finalPrice",
      headerName: "finalPrice",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.price}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Fragment>
      <Box m="20px">
        <Header title="Book" subtitle="" />
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={orders.map((option) => option.id)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="id" />}
        />
        <Box display="flex" gap={2} marginTop={2}>
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
          <DataGrid checkboxSelection rows={orders} columns={columns} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Invoices;
