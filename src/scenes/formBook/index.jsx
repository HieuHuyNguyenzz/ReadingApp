import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import Header from "../../components/Header";
import bookApis from "../api";

const initialValues = {
  bookName: "tờ",
  price: 666,
  bookImage:
    "https://th.bing.com/th/id/R.42a733560f846680ebeda2a000c23532?rik=CVB49h6DbchRKQ&riu=http%3a%2f%2fnikkiloftin.com%2fwp-content%2fuploads%2f2011%2f06%2fDads-Helpful-Devil-Book.jpg&ehk=mCNZedBEFa%2fpuBcPmd0of5nrXiKUVFEPJ4574Rx8zP4%3d&risl=&pid=ImgRaw&r=0",
  bookDescription: "sách thật ác wyr",
  genre: "ÁC WYR",
  author: "ác wy đây",
  preview: "thật là ác wy",
  rate: 5,
};

const FormBook = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [book, setBook] = useState(initialValues);
  const location = useLocation();
  const { state } = location;
  const { item } = state || {};
  const onChange = (name, value) => {
    setBook({ ...book, [name]: value });
  };
  useEffect(() => {
    if (item) {
      setBook(item);
    }
  }, []);

  const {
    bookName,
    genre,
    author,
    preview,
    price,
    bookDescription,
    bookImage,
  } = book;
  const handleFormSubmit = (values) => {
    const data = new FormData();
    Object.keys(book).forEach((key) => {
      data.append(key, book[key]);
    });

    if (item) {
      bookApis.updateBook(data, () => {});
    } else {
      bookApis.addBook(data, () => {});
    }
  };

  return (
    <Box m="20px">
      <Header
        title={item ? "EDIT Book" : "CREATE Book"}
        subtitle={item ? "Edit book" : "Create New Book"}
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={book}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleAddBook,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="bookName"
                onBlur={handleBlur}
                onChange={(e) => onChange("bookName", e.target.value)}
                value={bookName}
                name="bookName"
                error={!!touched.bookName && !!errors.bookName}
                helperText={touched.bookName && errors.bookName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="price"
                onBlur={handleBlur}
                onChange={(e) => onChange("price", e.target.value)}
                value={price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="bookImage"
                onBlur={handleBlur}
                onChange={(e) => onChange("bookImage", e.target.value)}
                value={bookImage}
                name="bookImage"
                error={!!touched.bookImage && !!errors.bookImage}
                helperText={touched.bookImage && errors.bookImage}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="bookDescription"
                onBlur={handleBlur}
                onChange={(e) => onChange("bookDescription", e.target.value)}
                value={bookDescription}
                name="bookDescription"
                error={!!touched.bookDescription && !!errors.bookDescription}
                helperText={touched.bookDescription && errors.bookDescription}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="genre"
                onBlur={handleBlur}
                onChange={(e) => onChange("genre", e.target.value)}
                value={genre}
                name="genre"
                error={!!touched.genre && !!errors.genre}
                helperText={touched.genre && errors.genre}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="preview"
                onBlur={handleBlur}
                onChange={(e) => onChange("preview", e.target.value)}
                value={preview}
                name="preview"
                error={!!touched.preview && !!errors.preview}
                helperText={touched.preview && errors.preview}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="author"
                onBlur={handleBlur}
                onChange={(e) => onChange("author", e.target.value)}
                value={author}
                name="author"
                error={!!touched.author && !!errors.author}
                helperText={touched.author && errors.author}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                onClick={handleFormSubmit}
                type="submit"
                color="secondary"
                variant="contained"
              >
                {item ? "Edit" : "Create"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  BookName: yup.string().required("required"),
  Price: yup.number().integer("Price must be an integer").required("required"),
  BookImage: yup.string().required("required"),
  BookDescription: yup.string().required("required"),
  Genre: yup.string().required("required"),
  Author: yup.string().required("required"),
  Preview: yup.string().required("required"),
});

export default FormBook;
