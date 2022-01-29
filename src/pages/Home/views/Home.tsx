import { AFEN_SVGS, DocumentHeader, Navbar } from "../../../components";
import { HomeHero } from "../components";
import HomeBody from "../components/HomeBody";

const { ChatBox } = AFEN_SVGS;

const Home = ({ title = "Home" }: { title?: string }) => {
  return (
    <>
      <DocumentHeader title={title} />
      <Navbar darkMode />
      <div className="font-secondary relative">
        <HomeHero />
        <HomeBody />
        <ChatBox className="fixed bottom-10 right-10 chat__box cursor-pointer transform hover:-translate-y-2 duration-500 transition-all" />
      </div>
    </>
  );
};

export default Home;
