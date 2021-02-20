// Core
import React, { FC } from "react";
import { Layout } from "antd";

const MainHeader: FC = () => {
  const { Header } = Layout;

  return (
    <Header
      style={{
        padding: 0,
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    />
  );
};

export { MainHeader };
