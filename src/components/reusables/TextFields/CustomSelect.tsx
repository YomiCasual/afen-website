import React from "react";

const CustomSelect = ({
  label,
  icon: Icon,
  options = [],
}: {
  label?: string;
  icon: any;
  options: any[];
}) => {
  return (
    <div className="">
      <label htmlFor="input" className="font-bold">
        {label}
      </label>
      <div className="flex relative w-full">
        <select
          name=""
          id=""
          className="border border-dashed border-[#494343]  shadow-md min-w-[30rem] w-full pl-8 pr-6 py-4  focus:shadow-lg"
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option?.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {Icon && (
          <Icon
            style={{ width: 15, height: 15 }}
            className="absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
