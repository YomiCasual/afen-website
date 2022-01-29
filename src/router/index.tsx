import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layouts";
import { APP_ROUTES_VIEW } from "./routes";

const Home = lazy(() => import("../pages/Home/views/Home"));

const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        {APP_ROUTES_VIEW.map(({ path, component: Component, key, ...rest }) => (
          <Route path={path} key={key} element={<Component />} {...rest} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRouter;
