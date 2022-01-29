import clsx from "clsx";
import { Link } from "react-router-dom";
import { CustomButton } from "../../reusables";
import { APP_ROUTES } from "../../../router/constants";
import { PRIMARY_NAV_LINKS } from "../constants";
import { AFEN_SVGS } from "../../constants";

const { AfenLogo, HalfMoon, SearchIcon, SunIcon, MenuIcon } = AFEN_SVGS;

const DesktopNav = ({
  darkMode,
  toggleNav,
}: {
  darkMode: boolean;
  toggleNav: () => void;
}) => {
  return (
    <div className="max-width-full w-full flex flex-wrap items-center justify-between lg:justify-center  gap-10 px-6 ">
      <article className="flex flex-wrap items-center justify-between">
        <Link to={APP_ROUTES.HOME}>
          <AfenLogo style={{ width: 86, height: 49 }} />
        </Link>

        <div className="hidden lg:block">
          <div className="flex relative ">
            <SearchIcon
              style={{ width: 15, height: 15 }}
              className="fill-afen-ash absolute top-1/2 transform -translate-y-1/2 left-3"
            />
            <input
              type="text"
              placeholder="Search Afen"
              className="border rounded-xl shadow-lg w-full md:min-w-[25rem] pl-8 pr-6 py-1 focus:shadow-xl  text-black
              "
            />
          </div>
        </div>
      </article>
      <div className="hidden xl:block">
        <article
          className={clsx(
            "text-afen-ash flex items-center gap-10",
            darkMode && "!text-white"
          )}
        >
          {PRIMARY_NAV_LINKS.map(({ name }) => (
            <p className="menu-item" key={name}>
              {name}
            </p>
          ))}
        </article>
      </div>
      <div className="hidden lg:block">
        <article className="flex items-center gap-4 flex-wrap">
          <div className="hidden md:block h-[2rem] bg-white border border-r"></div>
          <div className="cursor-pointer transform hover:-translate-y-1 duration-500 transition-all lg:block hidden">
            {darkMode ? (
              <SunIcon style={{ height: 19, width: 19 }} />
            ) : (
              <HalfMoon style={{ height: 19, width: 19 }} />
            )}
          </div>
          <CustomButton label="Get Started" />
          <CustomButton label="Connect Wallet" secondary />
        </article>
      </div>
      <div onClick={toggleNav} className="block lg:hidden justify-self-end">
        <MenuIcon style={{ width: 30, height: 30 }} />
      </div>
    </div>
  );
};

export default DesktopNav;
