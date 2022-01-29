import clsx from "clsx";
import React from "react";
import { AFEN_SVGS, CustomButton } from "../..";
import { PRIMARY_NAV_LINKS } from "../constants";

const { SearchIcon, CloseIcon } = AFEN_SVGS;

const MobileNav = ({ toggleNav }: { toggleNav: () => void }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-8 fixed top-0 bottom-0 w-full mobile-nav lg:hidden ">
      <CloseIcon
        onClick={toggleNav}
        style={{ width: 30, height: 30 }}
        className="absolute top-8 right-8 fill-white text-white"
      />
      <div className="flex relative">
        <SearchIcon
          style={{ width: 15, height: 15 }}
          className="fill-afen-ash absolute top-1/2 transform -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search Afen"
          className="border rounded-xl shadow-lg w-full md:min-w-[30rem] pl-8 pr-6 py-1 focus:shadow-xl text-black
              "
        />
      </div>
      <div className={clsx("flex flex-col items-center gap-8 text-white")}>
        {PRIMARY_NAV_LINKS.map(({ name }) => (
          <p className="menu-item" key={name}>
            {name}
          </p>
        ))}
      </div>
      <article className="flex flex-col items-center justify-center gap-8 flex-wrap">
        <CustomButton label="Get Started" />
        <CustomButton label="Connect Wallet" secondary />
      </article>
    </article>
  );
};

export default MobileNav;
