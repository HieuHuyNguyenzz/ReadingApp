import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./scenes/book";
import Form from "./scenes/form";
import FormBook from "./scenes/formBook";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import Team from "./scenes/team";
import FAQ from "./scenes/faq";

import { ColorModeContext, useMode } from "./theme";
// import Cors from
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Team />} />
              <Route path="/book" element={<Book />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/formBook/:id" element={<FormBook />} />
              <Route path="/formBook" element={<FormBook />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
