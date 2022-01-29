import React, { useState } from "react";
import { AFEN_SVGS } from "../../constants";

const { DropdownIcon } = AFEN_SVGS;

const CustomUpload = ({
  label,
  icon: Icon,
  iconType = "noIcon",
  name = "",
  placeholder = "Enter value",
  handleChange,
}: {
  name?: string;
  label?: string;
  icon?: any;
  iconType?: "dropdown" | "noIcon";
  placeholder?: string;
  handleChange?: (file: string) => void;
}) => {
  const [file, setFile] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const file = files[0];
      const urlFile = URL.createObjectURL(file);
      setFile(urlFile);

      handleChange && handleChange(urlFile);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-bold uppercase">
        {label}
      </label>
      <div className="flex relative w-full">
        <div className="relative w-full">
          <div className="border border-dashed border-[#494343]  shadow-md md:min-w-[30rem] w-full pl-4 pr-6 py-4  focus:shadow-lg h-[12rem]"></div>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col text-center justify-center gap-4 ">
            {file ? (
              <h3>File Selected</h3>
            ) : (
              <h3>JPG, GIF, WEBP, MP4, MAX... MB</h3>
            )}
            <button className="bg-afen-ash text-white px-12 py-1 rounded-full uppercase shadow-xl self-center">
              {file ? "Change file" : "choose file"}
            </button>
          </div>
          <input
            name={name}
            type="file"
            placeholder={placeholder}
            onChange={handleFileChange}
            className="absolute top-0 bottom-0 right-0  left-0 w-full opacity-0"
          />
        </div>
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

export default CustomUpload;
