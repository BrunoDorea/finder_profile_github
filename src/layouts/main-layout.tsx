import React, { PropsWithChildren } from "react";
import Header from "components/header/header";
import { MainContainer } from "./main-layout-styled";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
};

export default MainLayout;
