// Core
import React, { FC, ReactNode } from "react";
import { List } from "antd";

type DetailsItemPropsTypes = {
  children: ReactNode;
};

const DetailsItem: FC<DetailsItemPropsTypes> = (
  props: DetailsItemPropsTypes
) => {
  const { children } = props;
  const { Item } = List;

  return (
    <Item style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </Item>
  );
};

export { DetailsItem };
