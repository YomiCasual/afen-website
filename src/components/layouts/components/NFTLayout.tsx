const NFTLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <article className=" max-width-full w-full  flex-auto  flex ">
      <div className="left__banner"></div>
      <div
        className="flex-auto bg-white
      min-h-[40rem] max-h-[50rem] !mb-10  overflow-auto
      "
      >
        {children}
      </div>
    </article>
  );
};

export default NFTLayout;
