import { Link } from "react-router-dom";
import { AFEN_SVGS } from "../../../components";
import { APP_ROUTES } from "../../../router/constants";

const { ArrowLeft } = AFEN_SVGS;

const CreateNFTHeader = ({
  handleChange,
}: {
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <>
      <Link to={APP_ROUTES.HOME}>
        <div className="flex items-center gap-2">
          <ArrowLeft />
          <h3 className="text-2xl">Go back</h3>
        </div>
      </Link>
      <h3 className="text-4xl font-bold text-afen-black mt-6">
        Create Collectible
      </h3>
      <p className="text-2xl text-afen-ash mt-2">
        Select "Single" to create one unique collectible or "Multiple" to create
        more than one of the same item
      </p>
      <select
        onChange={handleChange}
        name=""
        id=""
        className="mt-14 border-2 w-full px-4 py-4 rounded-lg"
      >
        <option value="">Select</option>
        <option value="single">Single</option>
        <option value="mutliple">Multiple</option>
      </select>
    </>
  );
};

export default CreateNFTHeader;
