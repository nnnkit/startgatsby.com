import React from "react";
import Helmet from "react-helmet";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>StartGatsby Theme</title>
      </Helmet>
      <main className="container">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
