import React from "react";
import { AFEN_SVGS } from "../../constants";

const { DropdownIcon } = AFEN_SVGS;

const CustomInput = ({
  label,
  icon: Icon,
  iconType = "noIcon",
  name = "",
  placeholder = "Enter value",
}: {
  name?: string;
  label?: string;
  icon?: any;
  iconType?: "dropdown" | "noIcon";
  placeholder?: string;
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-bold uppercase">
        {label}
      </label>
      <div className="flex relative w-full">
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          className="border border-dashed border-[#494343] shadow-md w-full md:min-w-[30rem]  pl-4 pr-6 py-4  focus:shadow-lg

              "
        />
        {Icon && (
          <Icon
            style={{ width: 20, height: 20 }}
            className="absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        )}
        {iconType === "dropdown" && (
          <DropdownIcon
            style={{ width: 30, height: 30 }}
            className="absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
