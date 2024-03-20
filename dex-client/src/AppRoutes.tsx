import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import AppLayout from "./pages/AppLayout";
import ErrorIllustration from "./components/ErrorIllustration";
import Loader from "./components/Loader";

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorIllustration />}>
      <Suspense fallback={<Loader />}>
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
