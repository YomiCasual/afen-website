import clsx from "clsx";

const CustomButton = ({
  label,
  secondary = false,
  className = "",
}: {
  label: string;
  secondary?: boolean;
  className?: string;
}) => (
  <button
    className={clsx(
      `py-1 min-w-[13rem] border-2 rounded-xl text-afen-ash
transform shadow-md hover:-translate-y-1 duration-500 transition-all hover:shadow-xl hover:border-afen-yellow
  `,
      secondary && "bg-afen-yellow border-0",
      className
    )}
  >
    {label}
  </button>
);

export default CustomButton;
