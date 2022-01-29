import clsx from "clsx";
import MobileNav from "./MobileNav";
import { useState } from "react";
import DesktopNav from "./DesktopNav";

const Navbar = ({ darkMode = false }: { darkMode?: boolean }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <header
      className={clsx(
        "min-h-[5rem] flex flex-wrap items-center relative ",
        darkMode && "bg-[#222751] !text-white"
      )}
    >
      <DesktopNav darkMode={darkMode} toggleNav={toggleNav} />

      {showNav && <MobileNav toggleNav={toggleNav} />}
    </header>
  );
};

export default Navbar;
