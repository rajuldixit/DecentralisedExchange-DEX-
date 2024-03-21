import { useMediaQuery, useTheme } from "@mui/material";

const useScreenResolution = () => {
  const theme = useTheme();
  const screenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const screenMedium = useMediaQuery(theme.breakpoints.up("md"));
  const screenSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return { screenLarge, screenMedium, screenSmall, screenExtraSmall };
};

export default useScreenResolution;
