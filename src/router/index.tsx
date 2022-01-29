import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layouts";
import { APP_ROUTES_VIEW } from "./routes";

const CreateNFT = lazy(() => import("../pages/NFT/views/CreateSingleNFT"));

const AppRouter = () => {
  return (
    <AppLayout>
      <Routes>
        {APP_ROUTES_VIEW.map(({ path, component: Component, key, ...rest }) => (
          <Route path={path} key={key} element={<Component />} />
        ))}
        <Route path="*" element={<CreateNFT />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRouter;
