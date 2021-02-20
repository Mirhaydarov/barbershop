// Core
import React, { FC, ReactNode } from "react";
import { Layout, Typography } from "antd";

// Types
type MainSideBarPropsTypes = {
  logo: string | ReactNode;
  subTitle: string;
  children?: ReactNode;
};

const MainSideBar: FC<MainSideBarPropsTypes> = (
  props: MainSideBarPropsTypes
) => {
  const { children, logo, subTitle } = props;
  const { Sider } = Layout;
  const { Title } = Typography;

  return (
    <Sider
      width={230}
      style={{
        width: "40vw",
        padding: "0 .5em",
        backgroundColor: "rgba(0, 0, 0, 0)",
        textAlign: "center",
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: "2.4em",
          color: "#fff",
          textShadow: "1px 1px 3px black",
          marginTop: ".3em",
        }}
      >
        {logo}
      </Title>
      <Title level={3} style={{ color: "#c7c7c7" }}>
        {subTitle}
      </Title>
      {children}
    </Sider>
  );
};

export { MainSideBar };
