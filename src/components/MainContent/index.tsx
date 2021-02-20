// Core
import React, { FC, ReactNode } from "react";
import { Layout } from "antd";

// Types
type MainContentPropsTypes = {
  children?: ReactNode;
};

const MainContent: FC<MainContentPropsTypes> = (
  props: MainContentPropsTypes
) => {
  const { children } = props;
  const { Content } = Layout;

  return (
    <Content>
      {children}
    </Content>
  );
};

export { MainContent };
