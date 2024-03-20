import React from "react";
import useLocalStorage from "use-local-storage";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Header isChecked={isDark} handleChange={handleThemeChange} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
