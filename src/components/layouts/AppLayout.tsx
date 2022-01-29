import { Navbar, Footer } from "./components";

const AppLayout = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
