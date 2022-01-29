import { NFTCard } from "./";
import { HOME_ITEMS } from "../constants";

const HomeBody = () => {
  return (
    <div className="home__body">
      <div className="max-width space-y-10 py-24 px-4 md:px-0">
        {HOME_ITEMS.map(({ title, large, auction, items }) => (
          <div key={title} className="space-y-6">
            <h3 className="text-3xl font-black ">{title}</h3>
            <div className="flex gap-8 flex-wrap items-start justify-center  ">
              {items.map((item, index) => (
                <NFTCard
                  large={large}
                  auction={auction}
                  key={index}
                  item={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
