import { Box, Input, useTheme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import bookApis from "../api";
import { fetchStatusEnum } from "../constants";

const Book = () => {
  const [books, setBooks] = useState([]);
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(fetchStatusEnum.NONE);
  const [selectedBook, setSelectedBook] = useState({});
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "bookName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
    },
    {
      field: "bookDescription",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "genre",
      headerName: "Genre",
      flex: 1,
    },
    {
      field: "bookImage",
      headerName: "Image",
      flex: 1,
    },
    {
      field: "Preview",
      headerName: "Preview",
      flex: 1,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    setStatus(fetchStatusEnum.LOADING);
    bookApis.getBooks((books) => {
      setStatus(fetchStatusEnum.SUCCESS);
      setBooks(books);
    });
  }, []);

  const onSelectBook = (book) => {
    setSelectedBook(book);
  };

  const onDeleteBook = () => {
    const id = selectedBook.id;
    bookApis.deleteBook(id, () => {
      setBooks((prev) => {
        return prev.filter((it) => it.id != id);
      });
    });
  };

  const onCreateBook = () => {
    navigate(`/formBook`);
  };

  const onEditBook = () => {
    selectedBook.id &&
      navigate(`/formBook/${selectedBook.id}`, {
        state: { item: selectedBook, id: selectedBook.id },
      });
  };

  return (
    <Fragment>
      <Box m="20px">
        <Header title="Book" subtitle="" />
        <Input
          placeholder="Search book"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <Box display="flex" gap={2} marginTop={2}>
          <Button variant="contained" color="secondary" onClick={onCreateBook}>
            Thêm
          </Button>
          <Button variant="contained" color="secondary" onClick={onEditBook}>
            Sửa
          </Button>
          <Button variant="contained" color="secondary" onClick={onDeleteBook}>
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
            checkboxSelection={false}
            rows={books.filter((it) =>
              it.bookName.toLowerCase().includes(searchText.toLowerCase())
            )}
            columns={columns}
            hideFooter={true}
            loading={status === fetchStatusEnum.LOADING}
            onRowClick={(params) => onSelectBook(params.row)}
            disableMultipleRowSelection={true}
          />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Book;
