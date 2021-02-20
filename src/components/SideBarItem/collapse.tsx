// Core
import React, { FC, ReactNode } from "react";
import { Collapse as Collapses } from "antd";

// Styles
import "./index.css";

// Types
type CollapsePropsTypes = {
  title: string;
  children: ReactNode;
};

const Collapse: FC<CollapsePropsTypes> = (props: CollapsePropsTypes) => {
  const { children, title } = props;
  const { Panel } = Collapses;

  const collapseStyles = {
    fontSize: "1.2rem",
    backgroundColor: "rgba(0,0,0,.1)",
    boxShadow: "0 0 .3em rgba(255, 255, 255, .1)",
    marginTop: "1em",
    borderRadius: ".5em",
  };

  return (
    <Collapses className="collapse" style={collapseStyles} bordered={false}>
      <Panel header={title} key={title} style={{ borderBottom: "none" }}>
        {children}
      </Panel>
    </Collapses>
  );
};

export { Collapse };
