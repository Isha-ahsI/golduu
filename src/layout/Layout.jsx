import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../components/loader/Loader";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const layoutRoutes = ["/", "/home", "/aboutus", "/collections", "/contactus"];
  const hideLayout = !layoutRoutes.includes(location.pathname);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          {!hideLayout && <Header />}
          {children}
          {!hideLayout && <Footer />}
        </div>
      )}
    </>
  );
};
