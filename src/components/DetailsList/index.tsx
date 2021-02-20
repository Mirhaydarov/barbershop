// Core
import React, { FC, ReactNode } from "react";
import { Divider, List } from "antd";

type DetailsListPropsTypes = {
  title: string;
  children: ReactNode;
};

const DetailsList: FC<DetailsListPropsTypes> = (
  props: DetailsListPropsTypes
) => {
  const { title, children } = props;

  return (
    <>
      <Divider orientation="left">{title}</Divider>
      <List bordered>
        {children}
      </List>
    </>
  );
};

export { DetailsList };
