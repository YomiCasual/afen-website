import React from "react";
import { Navbar, Footer } from "./components";

const AppLayout = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
