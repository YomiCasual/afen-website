import React from "react";
import { AFEN_SVGS } from "../../constants";
import { PRIMARY_NAV_LINKS } from "../constants";
import { CustomButton } from "../../reusables";

const { AfenLogo, HalfMoon, SearchIcon } = AFEN_SVGS;

const Navbar = () => {
  return (
    <header className="min-h-[5rem] flex items-center ">
      <div className="max-width-full w-full flex items-center flex-wrap gap-10">
        <article className="flex items-center">
          <AfenLogo style={{ width: 86, height: 49 }} />
          <div className="flex relative">
            <SearchIcon
              style={{ width: 15, height: 15 }}
              className="fill-afen-ash absolute top-1/2 transform -translate-y-1/2 left-3"
            />
            <input
              type="text"
              placeholder="Search Afen"
              className="border rounded-xl shadow-lg min-w-[30rem] pl-8 pr-6 py-1 focus:shadow-xl 
              "
            />
          </div>
        </article>
        <article className="text-afen-ash flex items-center gap-10">
          {PRIMARY_NAV_LINKS.map(({ name }) => (
            <p key={name}>{name}</p>
          ))}
        </article>
        <article className="flex items-center gap-4">
          <HalfMoon style={{ height: 19, width: 19 }} />
          <CustomButton label="Get Started" />
          <CustomButton label="Connect Wallet" secondary />
        </article>
      </div>
    </header>
  );
};

export default Navbar;
