// Core
import React, { FC } from "react";
import { useStore } from "effector-react";
import { Typography } from "antd";

// Components
import { DetailsList } from "../DetailsList";
import { DetailsItem } from "../DetailsItem";

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
  const { Text } = Typography;

  const statusItemValue = {
    Дата: createdDate,
    Время: createdTime,
    Статус: status,
  };

  const clientItemValue = {
    "Имя Клиента": client,
    "Номер телефона": phone,
  };

  const barberItemValue = {
    Барбер: barber,
    Цена: price,
  };

  const ItemJSX = (props: Record<string, any>) => {
    const key = Object.keys(props);
    const value = Object.values(props);

    return key.map((item, i) => (
      <DetailsItem key={item}>
        <Text type="secondary">{item}</Text>
        {value[i]}
      </DetailsItem>
    ));
  };

  return (
    <>
      <DetailsList title="Статус">{ItemJSX(statusItemValue)}</DetailsList>
      <DetailsList title="Клиент">{ItemJSX(clientItemValue)}</DetailsList>
      <DetailsList title="Барбер">{ItemJSX(barberItemValue)}</DetailsList>
    </>
  );
};

export { ClientDetails };
