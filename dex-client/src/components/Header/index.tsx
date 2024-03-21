import React from "react";
import useScreenResolution from "../../hooks/useScreenResolution";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Header = ({ isDark, handleChange }: any) => {
  const { screenExtraSmall } = useScreenResolution();
  return (
    <>
      {!screenExtraSmall && (
        <DesktopView isDark={isDark} handleChange={handleChange} />
      )}
      {screenExtraSmall && (
        <MobileView isDark={isDark} handleChange={handleChange} />
      )}
    </>
  );
};

export default Header;
