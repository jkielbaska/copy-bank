import React from "react";
import { GlobalStyle } from "./theme/GlobalStyle";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//najpierw musi ustawić się na login przy otwartym tylko loginie i pokazana reszta zdjęć
function App() {
  // const location = useLocation();
  return (
    <div style={{ position: "relative" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Outlet />
      <Header />
      {/* <Test></Test> */}
      <Footer />
    </div>
  );
}

export default App;
