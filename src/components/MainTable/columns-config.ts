// Core
import { ColumnProps } from "antd/es/table";

// Types
import { ClientTypes } from "../../init/types";

export const columns: ColumnProps<ClientTypes>[] = [
  {
    key: "id",
    title: "Номер",
    dataIndex: "id",
  },
  {
    key: "createdDate",
    title: "Дата",
    dataIndex: "createdDate",
  },
  {
    key: "createdTime",
    title: "Время",
    dataIndex: "createdTime",
  },
  {
    key: "status",
    title: "Статус",
    dataIndex: "status",
  },
  {
    key: "client",
    title: "Клиент",
    dataIndex: "client",
  },
  {
    key: "phone",
    title: "Телефон клиента",
    dataIndex: "phone",
  },
  {
    key: "price",
    title: "Стоимость услуги",
    dataIndex: "price",
  },
  {
    key: "barber",
    title: "Барбер",
    dataIndex: "barber",
  },
];
