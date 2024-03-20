import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import AppLayout from "./pages/AppLayout";

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Tokens />} />
            <Route path="/swap" element={<Swap />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
