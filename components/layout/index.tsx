import React, { FC } from "react";
import { ThemeProvider, CSSReset, DarkMode, theme } from "@chakra-ui/core";
import { brandColorState } from "components/navbar";
import { selector, useRecoilValue } from "recoil";
import Container from "components/layout/container";

const Layout: FC = ({ children }) => {
  const brandColorSelector = selector({
    key: "brandColorSelector", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const brandColor = get(brandColorState);

      return brandColor;
    },
  });

  const brandColor = useRecoilValue(brandColorSelector);

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      brandColor,
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <DarkMode>
        <CSSReset />
        <Container>{children}</Container>
      </DarkMode>
    </ThemeProvider>
  );
};

export default Layout;