const NFTLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <article className="max-width-full w-full  flex-auto  flex flex-wrap ">
      <div className="left__banner hidden lg:block"></div>
      <div
        className="flex-auto bg-white
      min-h-[40rem] max-h-[50rem] !mb-10  overflow-auto px-4
      "
      >
        {children}
      </div>
    </article>
  );
};

export default NFTLayout;
