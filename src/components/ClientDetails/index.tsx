// Core
import React, { FC } from "react";
import { useStore } from "effector-react";
import { List, Divider, Typography } from "antd";

// Store
import { $client } from "../../models/client";

const ClientDetails: FC = () => {
  const {
    createdDate,
    createdTime,
    client,
    status,
    phone,
    price,
    barber,
  } = useStore($client);

  return (
    <>
      <Divider orientation="left">Статус</Divider>
      <List bordered>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Дата</Typography.Text> {createdDate}
        </List.Item>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Время</Typography.Text>{" "}
          {createdTime}
        </List.Item>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Статус</Typography.Text> {status}
        </List.Item>
      </List>

      <Divider orientation="left">Клиент</Divider>
      <List bordered>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Имя Клиента</Typography.Text>{" "}
          {client}
        </List.Item>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Номер телефона</Typography.Text>{" "}
          {phone}
        </List.Item>
      </List>

      <Divider orientation="left">Барбер</Divider>
      <List bordered>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Барбер</Typography.Text> {barber}
        </List.Item>
        <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography.Text type="secondary">Цена</Typography.Text> {price}
        </List.Item>
      </List>
    </>
  );
};

export { ClientDetails };
